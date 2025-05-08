import { INTEGER, Model, STRING } from "sequelize";

export class AdminEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: STRING(255),
                allowNull: false
            },
            password: {
                type: STRING(255),
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'admin',
            tableName: 'admins',
            underscored: true
        })
    }
}