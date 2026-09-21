import { Router } from "express";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { createInterviewSession, modifyInterviewSession, deleteSession, getSessionsById } from "../controllers/interview_session.controller"

const router = Router()

router.post("/create", createInterviewSession)
router.post("/updateById", modifyInterviewSession)
router.post("/deleteById", deleteSession)
router.get("/get-sessions", getSessionsById)


export default router