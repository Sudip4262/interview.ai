import { Router } from "express";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { createCategory, deleteCategoryById, updateCategoryById, getAllCategories } from "../controllers/categories.controller";

const router = Router()

//working
router.post("/create", createCategory );
router.post("/deleteByid", deleteCategoryById)
router.post("/updateByid", updateCategoryById)

router.get("/getall", getAllCategories)



export default router;
