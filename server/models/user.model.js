import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      min: 5,
      max: 20,
      unique: true
   },
   password: {
      type: String,
      required: true,
      min: 5
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   profilePicture:{
      type: String,
      default:"https://tse2.explicit.bing.net/th?id=OIP.AbGafkazjc_S1pZPh0B9cQHaIm&pid=Api&P=0&h=180"
   }
},
   {
      timestamps: true
   }
);

const User = mongoose.model('User', userSchema)
export default User;