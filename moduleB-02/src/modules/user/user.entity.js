import { INTEGER, Model, STRING } from "sequelize";
import { RoleEntity } from "../role/role.entity.js";

export class UserEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: STRING(100),
                allowNull: false
            },
            password: {
                type: STRING(255),
                allowNull: false
            },
            token: {
                type: STRING(255),
            },
            roleId: {
                type: INTEGER,
                references: {
                    model: RoleEntity,
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'user',
            tableName: 'users',
            underscored: true,
            timestamps: false
        })
    }

    static associate(entities) {
        this.belongsTo(entities.role);
        this.hasMany(entities.history);
    }
}