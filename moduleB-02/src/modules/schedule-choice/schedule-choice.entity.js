import { ENUM, FLOAT, INTEGER, Model, STRING, TEXT, TIME } from "sequelize";
import { PlaceEntity } from "../place/place.entity.js";

export class ScheduleChoiceEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
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
            segmentsHash: {
                type: STRING(255),
                allowNull: false
            },
            selectsCount: {
                type: INTEGER,
                defaultValue: 1
            }
        }, {
            sequelize,
            modelName: 'schedule_choice',
            tableName: 'schedule_choices',
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