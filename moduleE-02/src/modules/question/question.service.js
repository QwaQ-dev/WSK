import { where } from "sequelize";
import { ViolationError } from "../../utils/errors/violation.error.js";
import { AnswerEntity } from "../answer/answer.entity.js";
import { QuestionTypeEntity } from "../question-type/question-type.entity.js";
import { QuestionEntity } from "./question.entity.js";
import { editQuestioScheme } from "./question.scheme.js";

class QuestionService {

    async editQuestion (params, data) {

        const errors = {};

        try {
            await editQuestioScheme.validate(data, {
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
                redirect_url: `/admin/surveys/${params.surveyId}`
            });

        const question = await QuestionEntity.findOne({
            where: {
                id: params.questionId
            }
        })

        question.value = data.question;

        const questionType = await QuestionTypeEntity.findOne({
            where: {
                name: data.type
            }
        })

        question.questionTypeId = questionType.id;
        
        await question.save();

        await Promise.all(data.answers.map(async (answer, answerIndex) => {
            await AnswerEntity.update({
                where: {
                    value: answer
                }
            }, {
                where: {
                    id: data.answerIds[answerIndex],
                }
            })
        }))

        return;
        
    }

}

export const questionService = new QuestionService();