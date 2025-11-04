import { createContext, useContext, useEffect, useState } from "react";
import { myContext } from "./StateProvider";
import { io } from "socket.io-client";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setsocket] = useState(null);
  const { user, usertoken, backend_url } = useContext(myContext);
  const [onlineUsers, setonlineUsers] = useState([]);

  useEffect(() => {
    if (usertoken && user && user._id) {
      const socket = io(`${backend_url}`, {
        query: {
          userId: user._id,
        },
      });
      setsocket(socket);
      socket.on("getOnlineusers", (users) => {
        setonlineUsers(users);
      });
      return () => {
        socket.disconnect();
      };
    } else {
      if (socket) {
        socket.disconnect();
        setsocket(null);
      }
    }
  }, [usertoken, user]);

  const value = { socket, onlineUsers };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};
export default SocketProvider;
