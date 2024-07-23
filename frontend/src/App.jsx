import React from 'react'
import './App.css'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes, BrowserRouter} from "react-router-dom"
 
import toast, { Toaster } from 'react-hot-toast';
 
const App = () => {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      
    </Routes>
     
     
    </Router>
  )
}

export default App
