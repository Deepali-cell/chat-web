import express from "express";
import "dotenv/config";
import mongoDbConnect  from "./config/mongoDb.js";
import cors from "cors";
import userRouter from "./Routes/userRouter.js";
import messageRouter from "./Routes/messageRouter.js";
import { app, server } from "./socketIo/server.js";


// config
const port = process.env.PORT || 3000;
mongoDbConnect();


// middleware
app.use(express.json());
app.use(cors());

// endepoints
app.use("/api/user" , userRouter);
app.use("/api/message" , messageRouter);


app.get("/" , (req,res)=>{
  res.send("hello");
})
server.listen(port , (req,res)=>{
  console.log("server is working");
})