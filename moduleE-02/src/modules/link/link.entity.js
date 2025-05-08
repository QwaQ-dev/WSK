import { INTEGER, Model, STRING } from "sequelize";
import { SurveyEntity } from "../survey/survey.entity.js";

export class LinkEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            code: {
                type: STRING(8),
                allowNull: false
            },
            surveyId: {
                type: INTEGER,
                references: {
                    model: SurveyEntity,
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'link',
            tableName: 'links',
            underscored: true
        })
    }

    static associate(entities) {
        this.hasMany(entities.user_answer);
        this.belongsTo(entities.survey);
    }
}