import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


// Signin
export const createCategory = async (req:Request, res:Response) => {
  const category_name = "jupyter Notebook";
  const description = "This catagory belongs to python Developers";
  const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsp_h7dE5TInyWGYyQtsIDrQDDnJGqMLj4xRddLEgiw&s=10";
  const active = false

  try {
    const category = await prisma.categories.findUnique({
        where: {
            name: category_name
        }
    })

    if(category){
        return res.status(300).json({
            message:"catagory already exists!"
        })
    }

    const create = await prisma.categories.create({
        data: {
            name: category_name,
            description,
            img,
            active,
        }
    })

    return res.status(200).json({
        message:"Category created successfully!"
    })

  } catch (error) {
    return res.status(300).json({
        message:"Something went wrong! Category not created."
    })
  }
}

export const deleteCategoryById = async (req:Request, res:Response) => {
    const id=6;

    try {
        const Category = await prisma.categories.delete({
            where: {
                id
            }
        })


        return res.status(200).json({
            message: "category deleted!" 
        })

    } catch (error) {
        return res.status(400).json({
            message:"Category Not Deleted! Something went Wrong"
        })
    }
}

export const updateCategoryById = async (req:Request, res:Response) => {
    const id = 1;
    const name="Node";
    const description = "This category is for backend developers"

    try {
        const updatedCategory = await prisma.categories.update({
            where:{
                id,
            },
            data: {
                name,
                description
            }
        })

        return res.status(200).json({
            message:"HUraah! Data updated successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message:"Data not updated! Something went wrong"
        })
    }
}

export const getAllCategories = async (req:Request, res:Response) => {
    try {
        const allCategories = await prisma.categories.findMany()

        return res.status(200).json({
            allCategories
        })
    } catch (error) {
        return res.status(400).json({
            message:"Something went wrong! let's try again"
        })
    }
}