import mongoose from "mongoose";
import { deflate } from "zlib";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please enter username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "please enter email"],
        unique: true
    },
    username: {
        type: String,
        required: [true, "please enter password"]
    },
    isverified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User