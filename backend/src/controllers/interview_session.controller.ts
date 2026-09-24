import { prisma } from "../config/prisma"
import { Request, Response } from "express-serve-static-core"

export const createInterviewSession = async(req:Request, res:Response) => {
    const user_id = 11
    const category_id = 1
    const status = "active"
    const started_at = "15th July, 2026"
    const ended_at = "21th july, 2026"
    
    try {
        const createSession = await prisma.interview_session.create({
            data:{
                user_id,
                category_id,
                status,
                started_at,
                ended_at
            }
        })

        return res.status(200).json({
            message:"Interview Session created successfully",
            createSession
        })

    } catch (error) {
        return res.status(200).json({
            message:"Something went wrong in interview creation!",
        })
    }
}

export const modifyInterviewSession = async(req:Request, res:Response) => {
    const interviewId = 2
    const user_id = 10
    const category_id = 1
    const status = "paused"
    const started_at = "14th July, 2026"
    const ended_at = "19th july, 2026"

    try {
        const updateInterview = await prisma.interview_session.update({
            where:{
                id: interviewId,
            },
            data:{
                user_id,
                category_id,
                status,
                started_at,
                ended_at
            }
        })

        return res.status(200).json({
            message:"Interview session is updated! ",
            updateInterview
        })

    } catch (error) {
        return res.status(200).json({
            message:"Interview session can't be modified! ",
            error
        })
    }

}

export const deleteSession = async(req:Request, res:Response) => {
    const id = 4

    try {
        const Session = await prisma.interview_session.delete({
            where:{
                id
            }
        })

        return res.status(200).json({
            message:"Interview session deleted",
        })

    } catch (error) {
        return res.status(400).json({
            message:"Interview session not deleted !",
            error
        })
    }
}

export const getSessionsById = async(req:Request, res:Response) => {
    const user_id = 11

    try {
        const getData = await prisma.interview_session.findMany({
            where:{
                user_id,
            }
        })

        return res.status(200).json({
            message:"sessionData received",
            getData
        })
    } catch (error) {
        return res.status(200).json({
            error
        })
    }

}