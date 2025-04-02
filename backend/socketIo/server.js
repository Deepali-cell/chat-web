import {Server} from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server , {
  cors : {
    origin : "*",
    methods : ["GET" , "POST"],
  }
});
const users = {};
export const getReciverSocketId = (receiverId)=>{
  return users[receiverId];
}

io.on("connection" , (socket)=>{
  console.log("user is connected" , socket.id);
  const userId = socket.handshake.query.userId;
  if(userId){
    users[userId] = socket.id;
    io.emit("getOnlineusers" , Object.keys(users) );
  }

  socket.on("disconnect" , () => {
    console.log("user is disconnected" , socket.id)
    delete users[userId];
  io.emit("getOnlineusers" , Object.keys(users) );

  });
})

export {app , server , io};