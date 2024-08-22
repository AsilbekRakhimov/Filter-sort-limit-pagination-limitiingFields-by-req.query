import dotenv from "dotenv";
dotenv.config();

const appConfig = {
    port: process.env.PORT,
    host: process.env.HOST
}

export default appConfig