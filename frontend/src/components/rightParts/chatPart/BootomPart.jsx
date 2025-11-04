import { IoSend } from "react-icons/io5";
import useSendmessages from "../../../context/useSendmessage";
import { useState } from "react";

function BootomPart() {
  const { sendMessages } = useSendmessages();
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="h-[10vh] bg-gray-900 flex items-center px-4"
    >
      <div className="flex items-center w-full bg-gray-800 rounded-lg px-3 py-2">
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-white"
          placeholder="Send your message…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">
          <IoSend className="text-xl cursor-pointer text-white" />
        </button>
      </div>
    </form>
  );
}

export default BootomPart;
