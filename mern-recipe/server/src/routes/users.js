import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import { UserModel } from "../models/Usres.js";

const router = express.Router()

router.post("/register",async(req,res)=>{
    const {username, password} = req.body;

    const user = await UserModel.findOne({username})

    if(user){
        return res.status(300).json({message:"User alrredy exist"})
    }
    const hashedpassword =await bcrypt.hash(password,10)
    const newUsaer =new UserModel({username,password:hashedpassword});
    await newUsaer.save()
    res.status(200).json({message:"user Registerd Succesfully"})


});

router.post("/login",async(req,res)=>{
    const {username, password} = req.body;
    const user = await UserModel.findOne({username})
    console.log(user)
    
    if(user === null){
        return res.status(404).json({ message: "User does not exist" });}

    const isPasswordvalid = await bcrypt.compare(password,user.password);

    if(!isPasswordvalid){
          return res.status(401).json({ message: "Incorrect password" });

    }
    const token = jwt.sign({id:user._id},"boss")
    res.status(200).json({token,userID:user._id})
})

export {router as userRouter};

export const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        jwt.verify(token,"boss",(err)=>{
            if(err){
                return res.sendStatus(403)
            }
            next();
        })
    }else{
        res.sendStatus(401)
    }
}