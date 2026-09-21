import { prisma } from "../config/prisma";
import { Request, Response } from "express";

export const CreateInterviewAnswers = async(req:Request, res:Response) => {
    const session_id = 2
    const question_id = 3
    const user_answer = "This is test answer."
    const score = 9
    const feedback = "Test Feedback"

    try {
        const createAns = await prisma.interview_answers.create({
            data:{
                session_id,
                question_id,
                user_answer,
                score,
                feedback
            }
        })

        return res.status(200).json({
            message:"Answer created"
        })

    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

export const UpdateInterviewAnswers = async(req:Request, res:Response) => {
    const id = 1
    const question_id = 3
    const session_id = 2
    const user_answer = "This is test answer2222."
    const score = 7
    const feedback = "Test Feedback222"

    try {
        const updateAnswer = await prisma.interview_answers.update({
            where:{
                id,
            },
            data:{
                question_id,
                session_id,
                user_answer,
                score,
                feedback
            }
        })

        return res.status(200).json({
            message:"Answer Updated",
            updateAnswer
        })

    } catch (error) {
        return res.status(400).json({
            message:"!Something went wrong",
            error
        })
    }


}

export const DeleteInterviewAnswers = async(req:Request, res:Response) => {
    const id = 1
    try {
        const deleteAnswer = await prisma.interview_answers.delete({
            where:{
                id
            }
        })

        return res.status(200).json({
            message:"Perfectly deleted",
            deleteAnswer
        })

    } catch (error) {
        return res.status(400).json({
            message:"!Something went wrong",
            error
        })
    }
}