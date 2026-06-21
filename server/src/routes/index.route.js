import express from "express";
import authRoutes from "../modules/auth/auth.route.js";
import linkRoutes from "../modules/link/link.route.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/link", linkRoutes);

export default router;
