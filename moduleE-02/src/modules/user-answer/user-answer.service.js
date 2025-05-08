import { AnswerEntity } from "../answer/answer.entity";
import { QuestionEntity } from "../question/question.entity";
import { UserEntity } from "../user/user.entity";
import { UserAnswerEntity } from "./user-answer.entity";

class UserAnswerService {

    async getUserAnswers (surveyId) {
        const user_answers = await UserAnswerEntity.findAll({
            where: {
                surveyId
            },
            include: [{
                model: UserEntity
            }, {
                model: QuestionEntity,
            }, {
                model: AnswerEntity
            }]
        })

        return user_answers.map(user_answer => ({
            id: user_answer.id,
            ip: user_answer.user.ip,
            
        }))
    }

}

export const userAnswerService = new UserAnswerService();