import mongoose from "mongoose";
import validator from "validator";

const appointmentschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain atleast 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain atleast 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phoneNo: {
    type: String,
    required: true,
    minLength: [10, "Phone No must contain exactly 10 digits"],
    maxLength: [10, "Phone No must contain exactly 10 digits"],
  },
  nic: {
    type: String,
    required: true,
    minLength: [13, "NIC must contain exactly 13 digits"],
    maxLength: [13, "NIC must contain exactly 13 digits"],
  },
  dob: {
    type: Date,
    required: [true, "dob is required"],
  },
  gender: {
    type: String,
    required: "true",
    enum: ["Male", "Female"],
  },
  doctorDepartment: {
    type: String,
  },
  doctor:{
    firstName:{
        type:String,
        required:[true,"Doctor name is required"]
    },
    lastName:{
        type:String,
        required:[true,"Doctor name is required"]
    }
  },
  appointment_date:{
    type:String,
    required:[true,"Appointment Date is Required"]
  },
  doctorId:{
    type:mongoose.Schema.ObjectId,
    required:[true]
  },
  patientId:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:[true]
  },
  hasVisited:{
    type:Boolean,
    default:false
  },
  address:{
    type:String,
    required:[true,"Address is required"]
  },
  status:{
    type:String,
    enum:["Pending","Accepted","Rejected"],
    default:"Pending"
  }

});


export const Appointment=mongoose.model('Appointment',appointmentschema);