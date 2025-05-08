import { ENUM, FLOAT, INTEGER, Model, STRING, TEXT, TIME } from "sequelize";

export class PlaceEntity extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: STRING(100)
            },
            latitude: {
                type: FLOAT
            },
            longitude: {
                type: FLOAT
            },
            x: {
                type: INTEGER,
            },
            y: {
                type: INTEGER
            },
            type: {
                type: ENUM,
                values: ['Attraction', 'Restaurant']
            },
            imagePath: {
                type: STRING(50),
            },
            openTime: {
                type: TIME,
            },
            closeTime: {
                type: TIME
            },
            description: {
                type: TEXT
            }
        }, {
            sequelize,
            modelName: 'place',
            tableName: 'places',
            underscored: true,
            timestamps: false
        })
    }

    static associate(entities) {
        this.hasMany(entities.history);
    }
}