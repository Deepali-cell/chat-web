import express from "express";
import { allUsers, getProfile, loginUser, registerUser } from "../controller/usercontroller.js";
import { authUser } from "../middleware/authUser.js";

const userRouter = express.Router();

userRouter.post("/register" , registerUser );
userRouter.post("/login" , loginUser );
userRouter.get("/allusers" , authUser , allUsers );
userRouter.get("/getprofile" , authUser , getProfile);



export default userRouter;