import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = "mongodb+srv://minglet:als9531213@cluster0.zi6ygoe.mongodb.net/";

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const db = {
    mongo: {
        url: MONGODB_URL
    },
    server: {
        port: SERVER_PORT
    }
};