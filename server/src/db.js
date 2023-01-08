import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDb = async () => {
    try {
        mongoose.set('strictQuery', true);
        const db = await mongoose.connect(MONGODB_URI);
        console.log(`connected to: ${db.connection.name}`)
    } catch(error) {
        console.log('Error connecting to db', error);
    }
}