import { HistoryEntity } from "../modules/history/history.entity.js";
import { PlaceEntity } from "../modules/place/place.entity.js";
import { RoleEntity } from "../modules/role/role.entity.js";
import { ScheduleChoiceSegmentEntity } from "../modules/schedule-choice-segment/schedule-choice-segment.entity.js";
import { ScheduleChoiceEntity } from "../modules/schedule-choice/schedule-choice.entity.js";
import { ScheduleEntity } from "../modules/schedule/schedule.entity.js";
import { UserEntity } from "../modules/user/user.entity.js";
import { DATABASE } from "./database.js";

export const DatabaseEntities = {
    role: RoleEntity.init(DATABASE),
    user: UserEntity.init(DATABASE),
    place: PlaceEntity.init(DATABASE),
    schedule: ScheduleEntity.init(DATABASE),
    schedule_choice: ScheduleChoiceEntity.init(DATABASE),
    schedule_choice_segment: ScheduleChoiceSegmentEntity.init(DATABASE),
    history: HistoryEntity.init(DATABASE),
};