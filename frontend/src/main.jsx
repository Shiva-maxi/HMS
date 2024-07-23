import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const context=createContext();
const AppWrapper=()=>{
  const [isauthenticated,setIsauthenticated]=useState(false);
  const [user,setUser]=useState(false);


  return (
    <>
    
    <context.Provider value={{isauthenticated,setIsauthenticated,user,setUser}}>
    <Toaster/>
      <App />
    </context.Provider>
    </>
  )

}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <AppWrapper/>
  </React.StrictMode>,
)
