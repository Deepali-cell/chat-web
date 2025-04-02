import { useContext } from "react";
import { myContext } from "../../../context/StateProvider";
import useConversation from "../../../zustand/useConversation";

function Message({ message }) {
  const { user, usertoken } = useContext(myContext);
  const itsme = message.senderId === user._id;
  const chatform = itsme ? "chat-end" : "chat-start";
  const chatcolor = itsme ? "bg-blue-600" : "bg-slate-900";
  const { selectedConversation } = useConversation();
  const name = itsme ? user.username : selectedConversation.username;
  const createdTime = new Date(message.createdAt);
  const formateTime = createdTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div>
        <div className={`chat ${chatform} `}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">{name}</div>
          <div className={`chat-bubble ${chatcolor} `}>{message.message}</div>
          <div className="chat-footer opacity-50">{formateTime}</div>
        </div>
      </div>
    </>
  );
}

export default Message;
