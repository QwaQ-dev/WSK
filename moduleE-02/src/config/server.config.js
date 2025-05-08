import 'dotenv/config'

export const SERVER_CONFIG = {
    PORT: process.env.SERVER_PORT,
    SERVER_SESSION_SECRET_KEY: process.env.SERVER_SESSION_SECRET_KEY
}