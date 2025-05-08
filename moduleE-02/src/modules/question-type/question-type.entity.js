import { INTEGER, Model, STRING } from "sequelize";

export class QuestionTypeEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: STRING(100),
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'question_type',
            tableName: 'question_types',
            underscored: true
        })
    }

    static associate(entities) {
        this.hasMany(entities.question);
    }
}