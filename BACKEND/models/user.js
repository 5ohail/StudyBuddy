import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        minlength: 1,
        required: true,
        unique: true
    },
    password:{
        type: String,
        minlength: 8,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model("User", userSchema);
export default User;
