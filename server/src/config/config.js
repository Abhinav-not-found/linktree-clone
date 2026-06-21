import dotenv from "dotenv";

dotenv.config({ quiet: true });

const config = {
	port: process.env.PORT || 5000,
	mongodb_uri: process.env.MONGO_URI || "mongodb://localhost:27017/linktree",
	jwtSecret: process.env.JWT_SECRET || "your_jwt_secret",
	node_env: process.env.NODE_ENV || "development",
};

export default config;
