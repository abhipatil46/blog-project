import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const user = req.body;

    if (!user.username || !user.email || !user.password) {
        next(errorHandler(400, "All fields are required"))
    }

    const newUser = new User({
        username: user.username,
        email: user.email,
        password: user.password
    });

    try {
        await newUser.save();
        res.json({ message: "Sign up successfull" });
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        next(errorHandler(400, "All fields are required"))
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'User not found'))
        }
        let validPassword = '';
        if (validUser.password === password) {
            validPassword = password;
        } else {
            return next(errorHandler(400, "Invalid email or Password"))
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;

        res.status(200).cookie('token', token, { httpOnly: true }).json(rest);

    } catch (error) {
        next(error);
    }
};

export const googleSignIn = async (req, res, next)=>{
    const {email, username, googlePhotoUrl} = req.body;

    try {
        const validUser = await User.findOne({email});
        if(validUser){
            const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = validUser._doc;
            res.status(200).cookie('token', token, { httpOnly: true }).json(rest);
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8);
            const newUser = User({
                username: username.toLowerCase().split(' ').join(''),
                email: email,
                password: generatedPassword,
                profilePicture:googlePhotoUrl
            })
            try {
                await newUser.save();
                const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
                const { password: pass, ...rest } = newUser._doc;
                res.status(200).cookie('token', token, { httpOnly: true }).json(rest);
            } catch (error) {
                next(error);
            }
        }

    } catch (error) {
        next(error)
    }
}