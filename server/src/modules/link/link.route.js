import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import {
	createLink,
	getDeletedLinks,
	getLinkAnalytics,
	getLinkById,
	getLinksByUsername,
	hardDeleteLink,
	incrementLinkClick,
	softDeleteLink,
	updateLink,
} from "./link.controller.js";

const router = express.Router();

router.get("/analytics/:linkId", authMiddleware, getLinkAnalytics);
router.get("/link/:linkId", authMiddleware, getLinkById);
router.get("/:username", getLinksByUsername);
router.post("/create", authMiddleware, createLink);
router.patch("/:linkId/click", incrementLinkClick);

router.patch("/:linkId/soft-delete", authMiddleware, softDeleteLink);
router.delete("/:linkId/hard-delete", authMiddleware, hardDeleteLink);
router.get("/deleted/all", authMiddleware, getDeletedLinks);

router.patch("/:linkId", authMiddleware, updateLink);

export default router;
