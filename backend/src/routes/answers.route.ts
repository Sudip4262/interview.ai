import { Router } from "express";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { CreateInterviewAnswers, UpdateInterviewAnswers, DeleteInterviewAnswers } from "../controllers/answers.controller";
const router = Router()

router.post("/create", CreateInterviewAnswers)
router.post("/update", UpdateInterviewAnswers)
router.post("/delete", DeleteInterviewAnswers)



export default router