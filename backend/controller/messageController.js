import conversationModal from "../models/conversationModel.js";
import messageModal from "../models/messageModel.js";
import { getReciverSocketId, io } from "../socketIo/server.js";

const sendMessage = async (req,res)=>{
try {
  const {message} = req.body ;
  const {id: receiverId} = req.params;
  const senderId = req.userId;

  let conversation = await conversationModal.findOne({members : {$all : [ receiverId , senderId ]}});
  if(!conversation){
    conversation = new conversationModal({
   members : [receiverId , senderId]
    })
  }
  const newmessage = new messageModal({message , receiverId , senderId})
  await newmessage.save();
  if(newmessage){
   conversation.messages.push(newmessage._id);
  }
  const receiverSocketId = getReciverSocketId(receiverId);

  if(receiverSocketId){
    io.to(receiverSocketId).emit("newmessages" , newmessage);
  }
  await conversation.save();
  return res.json({success : true , message : "message send successfully" , messageContainer : newmessage});
} catch (error) {
  console.log(error);
  return res.status(500).json({ success: false, message: error.message });
}
}
const getMessage = async (req,res)  => {
  try {
  const {id: chatUser} = req.params;
  const senderId = req.userId;

  let conversation = await conversationModal.findOne({members : {$all : [ chatUser , senderId ]}}).populate("messages");
  if(!conversation){
    return res.json([]);
  }
  const messageContainer =  conversation.messages;
  return res.json({success : true , messageContainer });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

export {sendMessage , getMessage};