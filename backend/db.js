import mongoose, { Schema, model } from "mongoose";
import { userModel } from "./src/models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

// sudo systemctl start mongod
// add network access everytime to connect Atlas

const uri = process.env.MONGO_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const db = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(uri, clientOptions);
        console.log("Connected to MongoDB!");

    } catch (error) {
        console.error("Error connecting to MongoDB or performing operations:", error);
    }
    // } finally {
    //     // Disconnect from MongoDB
    //     await mongoose.disconnect();
    //     console.log("Disconnected from MongoDB!");
    // }
};

// Call the db function
export { db };
