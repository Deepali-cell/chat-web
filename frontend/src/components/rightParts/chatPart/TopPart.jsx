import { useContext } from "react";
import userIcon from "../../../assets/userIcon.png";
import useConversation from "../../../zustand/useConversation";
import { SocketContext } from "../../../context/SocketProvider";

function TopPart() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useContext(SocketContext);

  const isOnline = onlineUsers.includes(selectedConversation?._id);

  return (
    <div className="py-3 px-4 bg-gray-800 flex items-center gap-3 sticky top-0">
      {selectedConversation && (
        <>
          <img
            src={userIcon}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <h1 className="text-base sm:text-lg font-semibold capitalize">
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
        </>
      )}
    </div>
  );
}

export default TopPart;
