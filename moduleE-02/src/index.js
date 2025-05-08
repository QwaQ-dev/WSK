import { SERVER_CONFIG } from "./config/server.config.js"
import { DATABASE } from "./database/database.js";
import { SERVER } from "./server/server.js"
import { setEntitiesRelations } from "./utils/set-entities-relations.js";

const bootstrap = async () => {
    try {
        SERVER.listen(SERVER_CONFIG.PORT, () => console.log('server started'));

        setEntitiesRelations();

        await DATABASE.authenticate();
        await DATABASE.sync();
    } catch (error) {
        console.log(error)
    }
}

bootstrap();