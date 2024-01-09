import express from "express";
import authRoutes from "./auth/Routes.js";
import notesRoutes from "./notes/Routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/", notesRoutes);

export default router;
