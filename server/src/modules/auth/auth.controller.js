import jwt from "jsonwebtoken";
import config from "../../config/config.js";
import User from "../../models/user.model.js";

const generateToken = (user) => {
	return jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: "7d" });
};

export const register = async (req, res) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		return res
			.status(400)
			.json({ message: "username, email and password are required" });
	}

	try {
		let existing = await User.findOne({ $or: [{ email }, { username }] });
		if (existing) {
			return res
				.status(409)
				.json({ message: "User with given email or username already exists" });
		}

		const user = await User.create({ username, email, password });
		const token = generateToken(user);

		res.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: process.env.NODE_ENV === "production" ? "lax" : "none",
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		});

		res.status(201).json({
			token,
			user: { id: user._id, username: user.username, email: user.email },
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ message: "email and password are required" });
	}

	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(401).json({ message: "Invalid credentials" });

		const isMatch = await user.comparePassword(password);
		if (!isMatch)
			return res.status(401).json({ message: "Invalid credentials" });

		const token = generateToken(user);

		res.cookie("token", token, {
			httpOnly: true,
			secure: false,
			sameSite: "lax",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		res.status(200).json({
			token,
			user: { id: user._id, username: user.username, email: user.email },
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
};

export const logout = async (req, res) => {
	try {
		res.clearCookie("token", {
			httpOnly: true,
			secure: false,
			sameSite: "lax",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		return res.status(200).json({
			message: "Logged out successfully",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			message: "Server error",
		});
	}
};
