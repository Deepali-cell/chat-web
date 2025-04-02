import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  senderId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    required : true,
  },
  receiverId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    required : true,
  },
  message : {
    type : String,
    required : true,
  },
},{timestamps : true})

const messageModal = mongoose.model("message" , messageSchema);

export default messageModal;