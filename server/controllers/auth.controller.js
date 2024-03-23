import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
    const user = req.body;

    if(!user.username || !user.email || !user.password){
        next(errorHandler(400,"All fields are required"))
    }
    
    const newUser = new User({
        username : user.username,
        email: user.email,
        password: user.password
    });

    try {
        await newUser.save();
        res.json({message: "Sign up successfull"}); 
    } catch (error) {
        next(error);
    }
}