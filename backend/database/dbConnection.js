import mongoose from "mongoose";
import 'dotenv/config'
export const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HOSPITAL_MANAGEMENT_SYSTEM",
    }).then(()=>{
        console.log("connected successfully")
    }).catch((err)=>{
        console.log("error bro",err);
    })
}