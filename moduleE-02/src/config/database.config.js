import 'dotenv/config'

export const DATABASE_CONFIG = {
    NAME: process.env.DB_NAME,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DIALECT: process.env.DB_DIALECT
}