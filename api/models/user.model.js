import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username: {
        Type: String,
        required: true,
        unique: true,
        
    },
    email: {
        Type: String,
        required: true,
        unique: true,

    },
    password: {
        Type: String,
        required: true,
        

    }
},{ timeseries: true});

const User = mongoose.model('User', userSchema);

export default User;