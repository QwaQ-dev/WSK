import { DatabaseEntities } from "../database/entities.database.js"

export const setEntitiesRelations = () => {
    Object.values(DatabaseEntities).forEach(entity => {
        if (entity.associate) entity.associate(DatabaseEntities);
    });
};