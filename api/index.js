import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config(); //initialising dotenv

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) =>{
    console.log("error");
})
const app = express();

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
    app.use('/api/user' , userRouter)