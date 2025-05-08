import { INTEGER, Model, STRING } from "sequelize";
import { SurveyEntity } from "../survey/survey.entity.js";
import { QuestionTypeEntity } from "../question-type/question-type.entity.js";

export class QuestionEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            value: {
                type: STRING(255),
                allowNull: false
            },
            surveyId: {
                type: INTEGER,
                references: {
                    model: SurveyEntity,
                    key: 'id'
                }
            },
            questionTypeId: {
                type: INTEGER,
                references: {
                    model: QuestionTypeEntity,
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'question',
            tableName: 'questions',
            underscored: true
        })
    }

    static associate(entities) {
        this.belongsTo(entities.question_type);
        this.hasMany(entities.answer);
        this.hasMany(entities.user_answer);
    }
}