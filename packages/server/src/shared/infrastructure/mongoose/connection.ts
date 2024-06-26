import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

mongoose.connect(mongoURI).then(() => {
    console.log("Connected successfully with MongoDB");
}).catch((error) => {
    console.error("MongoDB Connection Error:", error);
});
