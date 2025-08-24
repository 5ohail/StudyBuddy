import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/register',async (req, res) => {
  const { username, email, password } = req.body;
  try{
    if(await User.findOne({email})){
      return res.status(400).json({message:"User already exists"});
    }
    if(await User.findOne({username})){
      return res.status(400).json({message:"Username already exists"});
    }
    if(!username || !email || !password){
      return res.status(400).json({message:"All fields are required"});
    }
    if(password.length < 8){
      return res.status(400).json({message:"Password must be at least 8 characters long"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const user = await User.create({username,email,password:hashedPassword})
    res.status(201).json({message:`${user.username} registered successfully`});
  }catch(err){
    res.status(500).json({message:err.message});
  }
});
router.post('/login',async (req, res) => {
  const { email, password } = req.body;
  try{
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({message:"User not found"});
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
      return res.status(400).json({message:"Invalid password"});
    }
    const generateToken = (id) => {
      return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"30d"});
    }
    res.status(200).json({message:"Login successful",user,token:generateToken(user._id),success:true});
    }catch(err){
    res.status(500).json({message:err.message});
  }
});
export default router;
