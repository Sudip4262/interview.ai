import { Router } from "express";
import { createUser, LoginUser } from "../controllers/user.controller";
import { prisma } from "../config/prisma";
import { authMiddleware } from "../middleware/AuthMiddleware";

const router = Router();

//working
router.post("/signin", createUser);
router.post("/login", LoginUser);


export default router;