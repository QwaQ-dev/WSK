import { INTEGER, Model, STRING } from "sequelize";
import { QuestionEntity } from "../question/question.entity.js";

export class AnswerEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            value: {
                type: STRING(128),
                allowNull: false
            },
            questionId: {
                type: INTEGER,
                references: {
                    model: QuestionEntity,
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'answer',
            tableName: 'answers',
            underscored: true
        })
    }

    static associate(entities) {
        this.belongsTo(entities.question);
        this.hasMany(entities.user_answer);
    }
}