import { INTEGER, Model, STRING } from "sequelize";
import { CategoryEntity } from "../category/category.entity.js";

export class SurveyEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: STRING(255),
                allowNull: false
            },
            description: {
                type: STRING(255),
                allowNull: false
            },
            categoryId: {
                type: INTEGER,
                references: {
                    model: CategoryEntity,
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'survey',
            tableName: 'surveys',
            underscored: true,
            paranoid: true
        })
    }

    static associate(entities) {
        this.belongsTo(entities.category);
        this.hasMany(entities.question);
        this.hasMany(entities.user_answer);
        this.hasMany(entities.link);
    }
}