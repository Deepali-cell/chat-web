import { useContext, useEffect } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import { myContext } from "./StateProvider.jsx";

function useGetmessages() {
  const { backend_url, usertoken } = useContext(myContext);
  const { setMessages, selectedConversation, messages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
  
      if (!selectedConversation || !selectedConversation._id) {
        setMessages([]); 
        return;
      }

      try {
        const { data } = await axios.get(`${backend_url}/api/message/get/${selectedConversation._id}`, {
          headers: {
            Authorization: `Bearer ${usertoken}`,
          },
        });

        if (data.success) {
          setMessages(data.messageContainer);
        } else {
          setMessages([]);
        }
      } catch (error) {
        console.error(error);
        setMessages([]);
      }
    };

    getMessages();
  }, [selectedConversation, setMessages, backend_url, usertoken]); 

  return { messages };
}

export default useGetmessages;
