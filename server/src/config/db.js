import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(config.mongodb_uri);
		console.log(`MongoDB Connected`);
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
};

export default connectDB;
