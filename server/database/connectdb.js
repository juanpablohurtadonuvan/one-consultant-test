import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('strictQuery', true);
try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Connect DB ok 👋");
} catch (error) {
    console.log("Error de conexión a mongodb:" + error);
}