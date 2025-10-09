import User from "../model/userModel.js";
import jwt from "jsonwebtoken";


export const registerUser=async(req,res)=>{
    try{
        const {name,email,phone,password}=req.body
        const existingUser=await User.findOne({email:email})
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        const user=new User({
            name,
            email,
            phone,
            password
        })
        await user.save()
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.status(201).json({message:"User registered successfully",token})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
}
export const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email:email})        
        if(!user){
            return res.status(400).json({message:"User not found"})
        }   
        if(user.password!==password){
            return res.status(400).json({message:"Invalid password"})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.status(200).json({message:"Login successful",token})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }

}

export default {registerUser,loginUser}