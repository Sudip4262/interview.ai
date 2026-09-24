import { Router } from "express";
import { createUser, LoginUser, verifyToken, getUserById } from "../controllers/user.controller";
import { prisma } from "../config/prisma";
import { authMiddleware } from "../middleware/AuthMiddleware";

const router = Router();

//working
router.post("/signin", createUser);
router.post("/login", LoginUser);
router.post("/verify", verifyToken);
router.get("/get-user", getUserById);


export default router;