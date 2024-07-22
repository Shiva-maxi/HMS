import express from "express";
import { getAllMessages, sendMessage } from "../controller/messageController.js";
import { isadminauthenticated } from "../middlewares/auth.js";

const router=express.Router();


router.post('/send',sendMessage);
router.get('/getall',isadminauthenticated,getAllMessages)

export default router;