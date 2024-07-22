import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'
const userschema = new mongoose.Schema({
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
  password: {
    type: String,
    required: [true, "Password Is Required!"],
    minLength: [8, "Password Must Contain At Least 8 Characters!"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "User Role Required!"],
    enum: ["Patient", "Doctor", "Admin"],
  },
  doctorDepartment: {
    type: String,
  },
  docAvatar: {
    public_id: String,
    url: String,
  },
});


userschema.pre("save",async (next)=>{
    if(!this.isModified("password")){
        next();
    }

    this.password=await bcrypt.hash(this.password,10)
})

userschema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
userschema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  };
export const User = mongoose.model("User", userschema);
