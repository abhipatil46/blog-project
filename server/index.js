import express, { request, response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import UserRoute from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Db");
}).catch((err)=>{
    console.log("Error connecting : "+err);
});

const app = express();

app.listen(3000,()=>{
    console.log("server is running on port 3000!!!");
})

app.use('/api/user',UserRoute); 

