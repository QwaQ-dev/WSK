import { INTEGER, Model, STRING } from "sequelize";

export class CategoryEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: STRING(255),
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'category',
            tableName: 'categories',
            underscored: true
        })
    }

    static associate(entities) {
        this.hasMany(entities.survey);
    }
}