import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     userName:{
        type: String,
        required: true,
        min: 5,
        max: 20,
        unique: true
     },
     password:{
        type: String,
        required: true,
        min: 5
     },
     email:{
        type: String,
        required: true,
        unique: true
     }
    },
     {
        timestamps: true
     }
);

const User = mongoose.model('User', userSchema)
export default User;