import { LinkEntity } from "./link.entity.js";
import crypto from 'crypto'

class LinkService {

async getLinks (surveyId) {
    const links = await LinkEntity.findAll({
        where: {
            surveyId
        }
    })

    return {
        surveyId,
        links: links.map(link => ({
            id: link.id,
            code: link.code
        }))
    }
}

async createLink (surveyId) {
    const code = await this.generateCode();

    await LinkEntity.create({
        code,
        surveyId
    })

    return code;
}

async generateCode () {
    let code;
    let exists = true;

    while(exists) {
        code = crypto.randomBytes(4).toString('base64').slice(0, 8)

        exists = await LinkEntity.findOne({
            where: {
                code
            }
        })
    }

    return code;
}

async deleteLink (id) {
    await LinkEntity.destroy({
        where: {
            id
        }
    })
    return;
}

}

export const linkService = new LinkService();