import { AdminEntity } from "../modules/admin/admin.entity.js";
import { AnswerEntity } from "../modules/answer/answer.entity.js";
import { CategoryEntity } from "../modules/category/category.entity.js";
import { LinkEntity } from "../modules/link/link.entity.js";
import { QuestionTypeEntity } from "../modules/question-type/question-type.entity.js";
import { QuestionEntity } from "../modules/question/question.entity.js";
import { SurveyEntity } from "../modules/survey/survey.entity.js";
import { UserAnswerEntity } from "../modules/user-answer/user-answer.entity.js";
import { UserEntity } from "../modules/user/user.entity.js";
import { DATABASE } from "./database.js";

export const DatabaseEntities = {
    admin: AdminEntity.init(DATABASE),
    user: UserEntity.init(DATABASE),
    category: CategoryEntity.init(DATABASE),
    survey: SurveyEntity.init(DATABASE),
    question_type: QuestionTypeEntity.init(DATABASE),
    question: QuestionEntity.init(DATABASE),
    answer: AnswerEntity.init(DATABASE),
    link: LinkEntity.init(DATABASE),
    user_answer: UserAnswerEntity.init(DATABASE)
};