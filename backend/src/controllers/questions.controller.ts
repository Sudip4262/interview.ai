import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createQuestions = async(req:Request, res:Response) => {
    const category_id = 8
    const question = "How would you improve API performance?";
    const difficulty = "easy"
    const answer = "Add database indexes Use Redis caching Paginate large datasets Optimize queries Enable compression Use connection pooling"
 
    try {
        const findQuestion = await prisma.questions.findFirst({
            where: {
                question,
            }
        })

        if(findQuestion){
            return res.status(400).json({
                message:"Question already exists"
            })
        }

        const create = await prisma.questions.create({
            data:{
                category_id,
                question,
                difficulty,
                answer,

                // category :{
                //     connect:{
                //         id: categoryId
                //     }
                // }
            }
        })

        return res.status(200).json({
            message:`Question created successfully at category_id: ${category_id}`
        })


    } catch (error) {
        return res.status(400).json({
            message:"Something went wrong!"
        })

    }
}

export const deleteQuestionsById = async(req:Request, res:Response) => {

    const Question_id = 3
    try {
        const deleteQuestion = await prisma.questions.delete({
            where:{
                id: Question_id
            }
        })
        return res.status(200).json({
            message:`Question_ID = ${Question_id} deleted successfully`
        })
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}

export const updateQuestionsById = async(req:Request, res:Response) => {

    const category_id = 1
    const Question_ID = 2
    const question = "Hii the question is being changed"
    const difficulty = "hard"
    const answer = "Ans.is modified"
    try {
        const update = await prisma.questions.update({
            where:{
                id: Question_ID
            },
            data:{
                category_id,
                question,
                difficulty,
                answer
            }
        })

        return res.status(200).json({
            message:`Question_id: ${Question_ID} updated successfully`
        })
        
    } catch (error) {
        return res.status(400).json({
            message:`Question_id: ${Question_ID} not updated! ${error}`
        })
    }
}