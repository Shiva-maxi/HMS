import React, { useState } from 'react'
import { useContext } from 'react'
import { context } from '../main'
import { Navigate, useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
  const {isauthenticated,setIsauthenticated}=useContext(context);
  const navigate=useNavigate();
  
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");

  const handlesubmit=async (e)=>{
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:8000/api/v1/user/login",
          { email, password, confirmPassword, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsauthenticated(true);
          navigate("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
    

  }

  if(isauthenticated ){
    return <Navigate to={"/"}/>
}

  return (
    <div className='container form-component login-form'>
      <h2>Sign In</h2>
      <p>Please Login to continue</p>
      <form onSubmit={handlesubmit}>
         <input type="text" value={email } onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input>
         <input type="password" value={password } onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
         <input type="password" value={confirmPassword } onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'></input>
         <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
      </form>
    </div>
    
  )
}

export default Login
