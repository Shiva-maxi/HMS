import express from "express";
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import { isadminauthenticated,ispatientauthenticated } from "../middlewares/auth.js";
const router=express.Router();


router.post('/post',ispatientauthenticated,postAppointment);
router.get('/getall',isadminauthenticated,getAllAppointments);

router.put('/update/:id',isadminauthenticated,updateAppointmentStatus)

router.delete('/delete/:id',isadminauthenticated,deleteAppointment)

export default router;