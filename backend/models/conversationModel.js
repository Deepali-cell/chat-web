import mongoose from "mongoose";
import userModal from "./userModel.js";
import messageModal from "./messageModel.js";


const conversationSchema = mongoose.Schema({
  members : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : userModal,
  }],
  messages : [{
    type : mongoose.Schema.Types.ObjectId ,
    ref : messageModal,
    default : [],
    }]
},{timestamps : true})

const conversationModal =mongoose.model("conversation" , conversationSchema);

export default conversationModal;