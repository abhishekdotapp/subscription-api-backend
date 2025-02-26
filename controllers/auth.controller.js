import mongoose from "mongoose"
import User from "../models/user.model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { JWT_SECRET, JWT_EXPIRES_IN} from "../config/env.js"


export const signUp = async(req,res,next) =>{
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({email});
        
        if(existingUser){
            const error = new Error("User already exist");
            error.statusCode = 400;
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = await User.create([{name,email, password: hashesPassword}], {session});
        const token = jwt.sign({userId: newUsers[0]._id}, JWT_SECRET,{expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data:{
                token,
                user: newUser[0],
            },
        })
    } catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async(req,res,next) =>{}

export const signOut = async(req,res,next) =>{}

