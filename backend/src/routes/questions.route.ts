import { Router } from "express";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { createQuestions, deleteQuestionsById, updateQuestionsById } from "../controllers/questions.controller";

const router = Router()

router.post("/create", createQuestions)
router.post("/delete", deleteQuestionsById)
router.post("/update", updateQuestionsById)

export default router;