import mongoose from "mongoose";
import validator from "validator";


const messageschema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name must contain atleast 3 characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name must contain atleast 3 characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please provide a valid email"]

    },
    phoneNo:{
        type:String,
        required:true,
        minLength:[10,"Phone No must contain exactly 10 digits"],
        maxLength:[10,"Phone No must contain exactly 10 digits"],
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message must contain atleast 10 charactes"]
    }
})


export const Message=mongoose.model('Message',messageschema);