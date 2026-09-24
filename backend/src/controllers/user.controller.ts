import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import bcrypt from "bcrypt"
import jwt, { JwtPayload } from "jsonwebtoken";


// Signin
export const createUser = async (req:Request, res:Response) => {
  const email= req.body.email
  const password= req.body.password
  const name = req.body.name
   try {
    console.log("Controller hit");
    const existingUser = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(350).json({
        message: "user already exists.",
      });
    }
    const hashedPassword:string = await bcrypt.hash(password,10)
    const user = await prisma.users.create({
      data:{
        name,
        email,
        password:hashedPassword,
        img:""
      }
    })
    

    return res.status(200).json({
        message: "user created.",
      });
    
   } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "SOmething went wrong"
    })
   }

}

// Login Using JWT
export const LoginUser = async (req:Request, res:Response) => {
  const email=req.body.email
  const password=req.body.password
  console.log(email, password, "got starrted login")

  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      }
    })
    // console.log(user)
    if(!user){
      return res.status(400).json({
        message:"Not found! User needs to register"
      })
    }

    const isPassValid = await bcrypt.compare(password, user.password)

    // console.log(isPassValid)
    if(!isPassValid){
      return res.status(350).json({
        message:"invalid credentials!"
      })
    }
    console.log("after if");

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn:"7d"
      }
    )
    return res.status(200).json({
      message:"Login Successful",
      token
    })
    
  } catch (error) {
    return res.status(400).json({
      message:error
    })
  }
}

// Token verify of logged in users.
export const verifyToken = async (req:Request, res:Response) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({
      message: "No Token Provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    console.log(decoded);

    return res.status(200).json({
      message:"Authorized",
      decoded
    })

  } catch (error) {
    return res.status(401).json({
      message: "UnAuthorized",
    });
  }
}

export const getUserById = async (req:Request, res:Response) => {

  const token = req.headers.authorization?.split(" ")[1]
  
  if (!token) {
    return res.status(401).json({
      message: "No Token Provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    if(!decoded){
      return res.status(402).json({
        message:"token expired!"
      })
    }

    const id = decoded.userId
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error
    });
  }
}
