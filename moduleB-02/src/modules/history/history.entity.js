import { ENUM, FLOAT, INTEGER, Model, STRING, TEXT, TIME } from "sequelize";
import { PlaceEntity } from "../place/place.entity.js";
import { UserEntity } from "../user/user.entity.js";

export class HistoryEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            placeId: {
                type: INTEGER,
                references: {
                    model: PlaceEntity,
                    key: 'id'
                }
            },
            userId: {
                type: INTEGER,
                references: {
                    model: UserEntity,
                    key: 'id'
                }
            },
            visitsCount: {
                type: INTEGER,
                defaultValue: 1
            }
        }, {
            sequelize,
            modelName: 'history',
            tableName: 'histories',
            underscored: true,
            timestamps: false
        })
    }

    static associate(entities) {
        this.belongsTo(entities.user);
        this.belongsTo(entities.place);
    }
}