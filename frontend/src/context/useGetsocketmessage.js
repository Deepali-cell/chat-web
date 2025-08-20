import { useContext, useEffect } from "react";
import { SocketContext } from "./SocketProvider";
import useConversation from "../zustand/useConversation.js";
import sound from "../assets/notification.mp3";

function useGetsocketmessage() {
  const { socket } = useContext(SocketContext);
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket.on("newmessages", (newmessages) => {
      const messagenotification = new Audio(sound);
      messagenotification.play();
      setMessages([...messages, newmessages]);
    });
  }, [socket, messages, setMessages]);
  return () => {
    socket.off("newmessages");
  };
}

export default useGetsocketmessage;
