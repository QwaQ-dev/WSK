import { INTEGER, Model, STRING } from "sequelize";

export class UserEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            ip: {
                type: STRING(128),
                allowNull: false
            },
            userAgent: {
                type: STRING(128),
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'user',
            tableName: 'users',
            underscored: true
        })
    }

    static associate(entities) {
        this.hasMany(entities.user_answer);
    }
}