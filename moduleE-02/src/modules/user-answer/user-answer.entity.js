import { INTEGER, Model, STRING } from "sequelize";
import { CategoryEntity } from "../category/category.entity.js";
import { SurveyEntity } from "../survey/survey.entity.js";
import { QuestionTypeEntity } from "../question-type/question-type.entity.js";
import { QuestionEntity } from "../question/question.entity.js";
import { LinkEntity } from "../link/link.entity.js";
import { AnswerEntity } from "../answer/answer.entity.js";
import { UserEntity } from "../user/user.entity.js";

export class UserAnswerEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            surveyId: {
                type: INTEGER,
                references: {
                    model: SurveyEntity,
                    key: 'id'
                }
            },
            linkId: {
                type: INTEGER,
                references: {
                    model: LinkEntity,
                    key: 'id'
                },
                onDelete: 'SET NULL'
            },
            questionId: {
                type: INTEGER,
                references: {
                    model: QuestionEntity,
                    key: 'id'
                }
            },
            answerId: {
                type: INTEGER,
                references: {
                    model: AnswerEntity,
                    key: 'id'
                }
            },
            userId: {
                type: INTEGER,
                references: {
                    model: UserEntity,
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'user_answer',
            tableName: 'user_answers',
            underscored: true
        })
    }

    static associate(entities) {
        this.belongsTo(entities.survey);
        this.belongsTo(entities.link);
        this.belongsTo(entities.question);
        this.belongsTo(entities.answer);
        this.belongsTo(entities.user);
    }
}