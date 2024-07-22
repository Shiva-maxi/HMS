import express from "express";
import { addNewAdmin, addNewDoctor, login, logoutAdmin, logoutPatient, patientRegister } from "../controller/userController.js";
import { isadminauthenticated,ispatientauthenticated } from "../middlewares/auth.js";
import { getUserDetails } from "../controller/userController.js";
import { getAllDoctors } from "../controller/userController.js";
const router=express.Router();



router.post('/patient/register',patientRegister);
router.post('/login',login);
router.post('/admin/addnew',addNewAdmin,isadminauthenticated);

router.post('/doctor/addnew',isadminauthenticated,addNewDoctor)
router.get('/doctors',getAllDoctors);
router.get("/patient/me",ispatientauthenticated ,getUserDetails);
router.get("/admin/me",isadminauthenticated, getUserDetails);
//logout 
router.get('/admin/logout',isadminauthenticated,logoutAdmin);
router.get('/patient/logout',ispatientauthenticated,logoutPatient);



export default router;