import { ENUM, FLOAT, INTEGER, Model, STRING, TEXT, TIME } from "sequelize";
import { ScheduleEntity } from "../schedule/schedule.entity.js";
import { ScheduleChoiceEntity } from "../schedule-choice/schedule-choice.entity.js";

export class ScheduleChoiceSegmentEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            scheduleId: {
                type: INTEGER,
                references: {
                    model: ScheduleEntity,
                    key: 'id'
                }
            },
            scheduleChoiceId: {
                type: INTEGER,
                references: {
                    model: ScheduleChoiceEntity,
                    key: 'id'
                }
            },
            order: {
                type: INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'schedule_choice_segment',
            tableName: 'schedule_choice_segments',
            underscored: true,
            timestamps: false
        })
    }

    static associate(entities) {
        this.belongsTo(entities.schedule);
        this.belongsTo(entities.schedule_choice);
    }
}