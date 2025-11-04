import { useContext } from "react";
import userIcon from "../../assets/userIcon.png";
import userIcon2 from "../../assets/user.png";
import { myContext } from "../../context/StateProvider";
import useConversation from "../../zustand/useConversation";
import { SocketContext } from "../../context/SocketProvider";

function User() {
  const { alluser } = useContext(myContext);
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useContext(SocketContext);

  return (
    <>
      {alluser.map((user) => {
        const isSelected = selectedConversation?._id === user._id;
        const isOnline = onlineUsers.includes(user._id);

        return (
          <div
            key={user._id}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
              isSelected ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
            onClick={() => setSelectedConversation(user)}
          >
            <img
              src={isOnline ? userIcon2 : userIcon}
              alt=""
              className="w-10 h-10 rounded-full"
            />

            <div className="overflow-hidden">
              <h1 className="text-sm truncate">{user.username}</h1>
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default User;
