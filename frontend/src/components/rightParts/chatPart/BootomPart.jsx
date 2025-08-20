import { IoSend } from "react-icons/io5";
import useSendmessages from "../../../context/useSendmessage";
import { useState } from "react";

function BootomPart() {
  const { sendMessages } = useSendmessages();
  const [message, setmessage] = useState("");
  const handlesendMessage = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setmessage("");
  };
  return (
    <div className="h-[10vh] ">
      <form onClick={handlesendMessage}>
        <label className="input rounded-none input-bordered bg-black border-white flex items-center outline-none border-none">
          <input
            type="text"
            className="grow"
            placeholder="Send your message here..."
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <IoSend />
        </label>
      </form>
    </div>
  );
}

export default BootomPart;
