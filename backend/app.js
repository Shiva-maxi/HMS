import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import {connectdb} from './database/dbConnection.js';
import messageRouter from './router/messageRouter.js';
import userRouter from './router/userRouter.js';
import appointmentRouter from "./router/appointmentRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import 'dotenv/config'
const app=express();
// console.log(process.env.FRONTEND_URL);
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    method:["GET","POST","PUT"],
    credentials:true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

app.use('/api/v1/message',messageRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/appointment',appointmentRouter)
connectdb()

app.use(errorMiddleware)

export default app;