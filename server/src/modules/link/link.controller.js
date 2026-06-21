import Link from "../../models/link.model.js";
import User from "../../models/user.model.js";

export const createLink = async (req, res) => {
	const user = req.user;
	const { title, url } = req.body;

	if (!title || !url) {
		return res.status(400).json({ message: "Title and URL are required" });
	}
	try {
		const newLink = await Link.create({ title, url, user: user.id });
		res
			.status(201)
			.json({ message: "Link created successfully", link: newLink });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getLinksByUsername = async (req, res) => {
	const { username } = req.params;

	const user = await User.findOne({ username });
	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	const links = await Link.find({ user: user.id, isDeleted: false }).populate(
		"user",
		"username",
	);

	return res
		.status(200)
		.json({ message: "Links retrieved successfully", links });
};

export const incrementLinkClick = async (req, res) => {
	const { linkId } = req.params;
	const link = await Link.findById(linkId);
	if (!link)
		return res.status(404).json({
			message: "link not found",
		});

	link.clicks += 1;
	await link.save();

	return res.status(200).json({
		message: "link click incremented",
		link,
	});
};

export const getLinkAnalytics = async (req, res) => {
	const { linkId } = req.params;

	try {
		const link = await Link.findById(linkId).populate("user", "username email");

		if (!link) {
			return res.status(404).json({
				message: "Link not found",
			});
		}

		return res.status(200).json({
			message: "Analytics fetched successfully",
			link,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Internal server error",
		});
	}
};

export const softDeleteLink = async (req, res) => {
	const { linkId } = req.params;

	const link = await Link.findById(linkId);

	if (!link) {
		return res.status(404).json({
			message: "Link not found",
		});
	}

	link.isDeleted = true;
	await link.save();

	return res.status(200).json({
		message: "Link moved to trash",
	});
};

export const hardDeleteLink = async (req, res) => {
	const { linkId } = req.params;

	const link = await Link.findByIdAndDelete(linkId);

	if (!link) {
		return res.status(404).json({
			message: "Link not found",
		});
	}

	return res.status(200).json({
		message: "Link permanently deleted",
	});
};

export const getDeletedLinks = async (req, res) => {
	const user = req.user;

	try {
		const links = await Link.find({
			user: user.id,
			isDeleted: true,
		}).populate("user", "username");

		return res.status(200).json({
			message: "Deleted links fetched successfully",
			links,
		});
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: "Internal server error",
		});
	}
};

export const updateLink = async (req, res) => {
	try {
		const { linkId } = req.params;
		const { title, url } = req.body;

		const link = await Link.findById(linkId);

		if (!link) {
			return res.status(404).json({
				message: "Link not found",
			});
		}

		if (title !== undefined) {
			link.title = title;
		}

		if (url !== undefined) {
			link.url = url;
		}

		await link.save();

		return res.status(200).json({
			message: "Link updated successfully",
			link,
		});
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: "Internal server error",
		});
	}
};

export const getLinkById = async (req, res) => {
	try {
		const { linkId } = req.params;

		const link = await Link.findOne({
			_id: linkId,
			user: req.user.id,
		});

		if (!link) {
			return res.status(404).json({
				message: "Link not found",
			});
		}

		return res.status(200).json({
			message: "Link fetched successfully",
			link,
		});
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: "Internal server error",
		});
	}
};
