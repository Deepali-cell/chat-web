import { useContext } from "react";
import userIcon from "../../assets/userIcon.png";
import { myContext } from "../../context/StateProvider";
import useConversation from "../../zustand/useConversation";
import { SocketContext } from "../../context/SocketProvider";
import userIcon2 from "../../assets/user.png";

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
          <>
            <div
              key={user._id}
              className={`flex gap-2 items-center mb-2 py-2 px-2 rounded-md cursor-pointer ${
                isSelected ? "bg-slate-700" : ""
              }`}
              onClick={() => {
                setSelectedConversation(user);
              }}
            >
              <div>
                <img
                  src={isOnline ? userIcon2 : userIcon}
                  alt=""
                  className="h-12 w-12"
                />
              </div>
              <div>
                <h1 className="text-sm">{user.username}</h1>
                <p className="text-[0.9em] text-gray-400 font-light">
                  {user.email}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default User;
