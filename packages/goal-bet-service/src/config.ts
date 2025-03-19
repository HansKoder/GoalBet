import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
    return {
        DATABASE: {
            DATABASE_NAME: process.env.DATABASE_NAME,
            DATABASE_URL: process.env.DATABASE_URL,
            DATABASE_USER: process.env.DATABASE_USER,
            DATABASE_PASS: process.env.DATABASE_PASS,
            DATABASE_PORT: process.env.DATABASE_PORT,
        },
        API_KEY: process.env.API_KEY,
    }
});