import { Op, Transaction, ValidationError } from "sequelize";
import { CategoryEntity } from "../category/category.entity.js";
import { SurveyEntity } from "./survey.entity.js";
import { ViolationError } from "../../utils/errors/violation.error.js";
import { createSurveyScheme, updateSurveyScheme } from "./survey.scheme.js";
import { BadRequestError } from "../../utils/errors/bad-request.error.js";
import { DATABASE } from "../../database/database.js";
import { QuestionTypeEntity } from "../question-type/question-type.entity.js";
import { QuestionEntity } from "../question/question.entity.js";
import { AnswerEntity } from "../answer/answer.entity.js";

class SurveyService {

    async getSurveys () {
        const surveys = await SurveyEntity.findAll({
            attributes: ['id', 'title', 'description'],
            include: [{
                model: CategoryEntity,
                attributes: ['id', 'name']
            }]
        })

        return surveys.map(survey => ({
            id: survey.id,
            title: survey.title,
            description: survey.description,
            categoryName: survey.category.name
        }));
    } 

    async createSurvey (request) {
        const data = request.body;

        const errors  ={};

        try {
            await createSurveyScheme.validate(data, {
                abortEarly: false
            });

            data.questions.forEach((question, questionIndex) => {
                const answers = data[`answers-${questionIndex}`];

                if (!answers || !Array.isArray(answers) || answers.length !== 4) return errors[`answers-${questionIndex}`] = 'Ответы обязательны и количество должно быть 4!';

                answers.forEach((answer, answerIndex) => {
                    if (!answer || answer.length > 128) errors[`answers-${questionIndex}-${answerIndex}`] = 'Обязательное поле и длина максимум 128!'
                })

                const type = data[`type-${questionIndex}`];

                if (!type || (type !== 'one' && type !== 'many')) errors[`type-${questionIndex}`] = ['required'];
            })
        } catch (error) {
            error.inner.forEach(inner => {
                errors[inner.path] = inner.message;
            })
        }

        if (Object.entries(errors).length > 0)
        {
            request.session.cacheSurvey  =data;
            throw new ViolationError({
                errors,
                redirect_url: '/admin/surveys/create'
            });
        }

        const category = await CategoryEntity.findOne({
            where: {
                id: data.categoryId
            }
        })

        if (!category)
            throw new BadRequestError({
                message: 'Category not found',
                redirect_url: '/admin/categories'
            })

            const [survey, isCreatedSurvey] = await SurveyEntity.findOrCreate({
                where: {
                    title: data.title
                },
                defaults: {
                    categoryId: category.id,
                    description: data.description
                }
            })

            if (!isCreatedSurvey)
                throw new BadRequestError({
                    message: 'Опрос существует',
                    redirect_url: '/admin/surveys/create'
                });

        const transaction = await DATABASE.transaction({
            isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
        });

        try {

            const questions = await Promise.all(data.questions.map(async (question, questionIndex) => {
                const questionType = await QuestionTypeEntity.findOne({
                    where: {
                        name: data[`type-${questionIndex}`]
                    }
                })

                if (!questionType)
                    throw new Error("");

                return {
                    value: question,
                    surveyId: survey.id,
                    questionTypeId: questionType.id
                }
            }))

            const createdQuestions = await QuestionEntity.bulkCreate(questions);

            const answers = [];

            createdQuestions.forEach((question, questionIndex) => {
                const questionAnswers = data[`answers-${questionIndex}`];

                questionAnswers.forEach((answer, answerIndex) => {
                    answers.push({
                        value: answer,
                        questionId: question.id
                    })
                })
            })

            await AnswerEntity.bulkCreate(answers);

            await transaction.commit();
        } catch (error) {
            console.log(error)
            await transaction.rollback();

            throw new BadRequestError({
                message: 'Попробуйте еще раз и заполните правильно данные',
                redirect_url: '/admin/surveys/create'

            })
        }

        return;
    }

    async editSurvey (surveyId, data) {
        if (!surveyId)
            throw new BadRequestError({
                message: 'Survey id required',
                redirect_url: '/admin/surveys'
            })

        const survey  =await SurveyEntity.findOne({
            where: {
                id: surveyId
            }
        })

        if (!survey) 
            throw new BadRequestError({
                message: 'Survey id required',
                redirect_url: '/admin/surveys'
            })

        const errors = {};

            try {
                await updateSurveyScheme.validate(data, {
                    abortEarly: false
                })
            } catch (error) {
                error.inner.forEach(inner => {
                    errors[inner.path] = inner.message;
                })
            }

        if (Object.entries(errors).length > 0)
            throw new ViolationError({
                errors,
                redirect_url: `/admin/surveys/${survey.id}`
            })

        await SurveyEntity.update(data, {
            where: {
                id: survey.id
            }
        })

        return;
    }

    async deleteSurvey (surveyId) {
        if (!surveyId)
            throw new BadRequestError({
                message: 'Survey id required',
                redirect_url: '/admin/surveys'
            })

        const survey  =await SurveyEntity.findOne({
            where: {
                id: surveyId
            }
        })

        if (!survey) 
            throw new BadRequestError({
                message: 'Survey id required',
                redirect_url: '/admin/surveys'
            })

        await survey.destroy();

        return;
    }

    async getSurvey (surveyId) {
        if (!surveyId)
            throw new BadRequestError({
                message: 'Survey id required',
                redirect_url: '/admin/surveys'
            })

        const survey  =await SurveyEntity.findOne({
            where: {
                id: surveyId
            },
            include: [{
                model: CategoryEntity
            }, {
model: QuestionEntity,
include: [{
    model: AnswerEntity
}, {
    model: QuestionTypeEntity
}]                
            }]
        })

        if (!survey) 
            throw new BadRequestError({
                message: 'Survey id required',
                redirect_url: '/admin/surveys'
            })

            return {
                id: survey.id,
                title: survey.title,
                description: survey.description,
                categoryName: survey.category.name,
                categoryId: survey.category.id,
                questions: survey.questions.map(question => ({
                    id: question.id,
                    value: question.value,
                    type: question.question_type.name,
                    answers: question.answers.map(answer => ({
                        id: answer.id,
                        value: answer.value,
                    }))
                }))
            }
    }

    async getDeletedSurveys () {
        const surveys = await SurveyEntity.findAll({
            where: {
                deleted_at: {
                    [Op.ne]: null
                }
            },
            attributes: ['id', 'title', 'description'],
            include: [{
                model: CategoryEntity,
                attributes: ['id', 'name']
            }],
            paranoid: false
        })

        return surveys.map(survey => ({
            id: survey.id,
            title: survey.title,
            description: survey.description,
            categoryName: survey.category.name
        }));
    }

}

export const surveyService = new SurveyService();