import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import AddNewAdmin from "./components/AddNewAdmin";
import Doctors from "./components/Doctors";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import { context } from "./main";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import Messages from "./components/Messages"
const App = () => {
  const { isauthenticated, setIsauthenticated, setAdmin, admin } =
    useContext(context);
  useEffect(() => {
    console.log("dfcdsfdsc");
    const fetchuser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/admin/me",
          { withCredentials: true }
        );
        // console.log("dgfdg")
        setIsauthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsauthenticated(false);
        setAdmin({});
      }
    };
    fetchuser();
  }, [isauthenticated]);
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor/addnew" element={<AddNewDoctor />} ></Route>
          <Route path="/admin/addnew" element={<AddNewAdmin />}></Route>
          <Route path="/doctors" element={<Doctors/>}></Route>
          <Route path="/messages" element={<Messages/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
