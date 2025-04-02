import express from "express";
import { getMessage, sendMessage } from "../controller/messageController.js";
import { authUser } from "../middleware/authUser.js";


const messageRouter = express.Router();

messageRouter.post("/send/:id" , authUser, sendMessage); 
messageRouter.get("/get/:id" , authUser, getMessage); 

export default messageRouter;