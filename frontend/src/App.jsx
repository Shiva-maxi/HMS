import React, { useContext, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes, BrowserRouter} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { context } from './main'
import axios from 'axios'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'
 
const App = () => {
  const {isauthenticated,setIsauthenticated,user,setUser}=useContext(context);
  useEffect(()=>{
    const fetchuser=async ()=>{
      try {
        const response=await axios.get("http://localhost:8000/api/v1/user/patient/me",{withCredentials:true});
        setIsauthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsauthenticated(false);
        setUser({});
      }
    }
  fetchuser();
  },[isauthenticated])
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      
    </Routes>
    <Footer/>
     
     
    </Router>
  )
}

export default App
