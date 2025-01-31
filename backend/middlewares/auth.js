import ErrorHandler from "../middlewares/errorMiddleware.js";
import { catchAsyncError } from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const isadminauthenticated=catchAsyncError(async (req,res,next)=>{
    const token=req.cookies.adminToken;
    if(!token){
        return next(new ErrorHandler("Dashboard User is not authenticated",400));
    }


    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user=await User.findById(decoded.id);
    if(req.user.role!="Admin"){
        return next(new ErrorHandler(`${req.user.role} not authorized for this resource`,403));
    }
    next();
})



export const ispatientauthenticated=catchAsyncError(async (req,res,next)=>{
    const token=req.cookies.patientToken;
    if(!token){
        return next(new ErrorHandler("patient is not authenticated",400));
    }


    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user=await User.findById(decoded.id);
    if(req.user.role!="Patient"){
        return next(new ErrorHandler(`${req.user.role} not authorized for this resource`,403));
    }
    next();
})