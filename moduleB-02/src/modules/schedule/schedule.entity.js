import { ENUM, FLOAT, INTEGER, Model, STRING, TEXT, TIME } from "sequelize";
import { PlaceEntity } from "../place/place.entity.js";

export class ScheduleEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            line: {
                type: INTEGER
            },
            fromPlaceId: {
                type: INTEGER,
                references: {
                    model: PlaceEntity,
                    key: 'id'
                }
            },
            toPlaceId: {
                type: INTEGER,
                references: {
                    model: PlaceEntity,
                    key: 'id'
                }
            },
            departureTime: {
                type: TIME
            },
            arrivalTime: {
                type: TIME
            },
            distance: {
                type: INTEGER
            },
            speed: {
                type: INTEGER
            },
            status: {
                type: ENUM,
                values: ['AVAILABLE', 'UNAVAILABLE'],
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'schedule',
            tableName: 'schedules',
            underscored: true,
            timestamps: false
        })
    }

    static associate(entities) {
        this.belongsTo(entities.place, {
            foreignKey: 'fromPlaceId',
            as: 'fromPlace'
        });
        this.belongsTo(entities.place, {
            foreignKey: 'toPlaceId',
            as: 'toPlace'
        });
        this.hasMany(entities.schedule_choice_segment);
    }
}