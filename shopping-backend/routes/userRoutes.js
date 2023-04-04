import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { authUser, getUserProfile } from "../controllers/userController.js";
import { isAuthorized } from "../middleware/authMiddleware.js";

router.route("/signin").post(authUser);
router.route("/profile").get(isAuthorized, getUserProfile);

export default router;
