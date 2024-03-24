import express, { request, response } from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import UserRoute from './routes/user.route.js';
import AuthRoute from './routes/auth.route.js';


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Db");
}).catch((err)=>{
    console.log("Error connecting : "+err);
});

const app = express();

app.use(cors())

app.use(express.json())

app.listen(7272,()=>{
    console.log("server is running on port 7272!!!");
})

app.use('/api/user',UserRoute); 
app.use('/api/auth',AuthRoute); 

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.header('Content-Type', 'application/json');
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

