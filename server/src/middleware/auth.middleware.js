import jwt from "jsonwebtoken";
import config from "../config/config.js";

const authMiddleware = (req, res, next) => {
	const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	try {
		const decoded = jwt.verify(token, config.jwtSecret);
		req.user = decoded;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Invalid token" });
	}
};

export default authMiddleware;
