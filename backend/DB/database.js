import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const dbURL = process.env.MONGO_URL;
        const { connection } = await mongoose.connect(dbURL);
        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}