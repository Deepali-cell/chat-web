import { useContext, useEffect } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";
import { myContext } from "./StateProvider.jsx";

function useSendmessages() {
  const { backend_url, usertoken } = useContext(myContext);
  const { setMessages, selectedConversation, messages } = useConversation();

  const sendMessages = async (message) => {
    try {
      const { data } = await axios.post(`${backend_url}/api/message/send/${selectedConversation._id}`, {message} ,  {
        headers: {
          Authorization: `Bearer ${usertoken}`,
        },
      });

      if (data.success) {
        setMessages([...messages , data.messageContainer]);
      } else {
        setMessages([...messages]);
      }
    } catch (error) {
      console.error(error);
      setMessages([...messages]);
    }
  };


  return { sendMessages };
}

export default useSendmessages;
