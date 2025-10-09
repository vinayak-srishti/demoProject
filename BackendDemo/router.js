import user from "./controller/userController.js";
import express from 'express';
const router=express.Router();

router.post("/register",user.registerUser)
router.post("/login",user.loginUser)

export default router;  
