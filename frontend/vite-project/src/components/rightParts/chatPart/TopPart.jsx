import { useContext } from "react";
import userIcon from "../../../assets/userIcon.png";
import useConversation from "../../../zustand/useConversation";
import { SocketContext } from "../../../context/SocketProvider";

function TopPart() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useContext(SocketContext);
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  return (
    <div className="py-4 flex items-center justify-between bg-gray-800 px-4 md:px-6">
      {selectedConversation ? (
        <div className="flex items-center">
          <img
            src={userIcon}
            alt="User Icon"
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-lg text-white capitalize">
              {selectedConversation.username}
            </h1>
            <p
              className={`text-sm ${
                isOnline ? "text-green-400" : "text-red-400"
              }`}
            >
              {isOnline ? "online" : "offline"}
            </p>
          </div>
        </div>
      ) : (
        <h1 className="text-lg text-white">Select a conversation</h1>
      )}
    </div>
  );
}

export default TopPart;
