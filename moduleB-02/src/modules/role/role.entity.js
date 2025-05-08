import { INTEGER, Model, STRING } from "sequelize";

export class RoleEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: STRING(100)
            }
        }, {
            sequelize,
            modelName: 'role',
            tableName: 'roles',
            underscored: true,
            timestamps: false
        })
    }

    static associate(entities) {
        this.hasMany(entities.user);
    }
}