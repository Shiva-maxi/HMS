import { Message } from "../models/messageSchema.js";
import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
 
export const sendMessage=catchAsyncError(async (req,res,next)=>{
    const {firstName,lastName,email,phoneNo,message}=req.body;
    if(!firstName || !lastName || !email || !phoneNo || !message){
        return next(new ErrorHandler("Please Fill Full form",400))
    }

    await Message.create({firstName,lastName,email,phoneNo,message});


    return res.status(200).json({
        success:true,
        message:"Message sent successfully"
    })
});



export const getAllMessages=catchAsyncError(async (req,res,next)=>{
    const messages=await Message.find();

    res.status(200).json({
        success:true,
        messages,
    })
})