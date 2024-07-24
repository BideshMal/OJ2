import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
dotenv.config(); //initialising dotenv

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) =>{
    console.log("error");
})
const app = express();

app.use(express.json());

app.listen(3000, () =>{
    console.log("Server is running on port 3000;");
    });
//best practice is to cretae separate folders for api,routes and functions
    // app.get('/test', (req,res) => {
    //     res.json({
    //         message: 'Hello World',
    //     });
    // }
        
    // )
    app.use('/api/user' , userRouter);
    app.use('/api/auth', authRouter);

    //creating middleware to handle errors

    app.use((err, req, res, next) =>{
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error'
        return res.status(statusCode).json({
            success: false,
            statusCode,
            message
        });

    });