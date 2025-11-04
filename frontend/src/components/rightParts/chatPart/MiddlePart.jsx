import { useEffect, useRef } from "react";
import useGetmessages from "../../../context/useGetmessages";
import Message from "./Message";
import useGetsocketmessage from "../../../context/useGetsocketmessage.js";

function MiddlePart() {
  const { messages } = useGetmessages();
  useGetsocketmessage();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 py-2">
      {messages.length === 0 ? (
        <div className="h-full flex justify-center items-center text-center text-gray-300">
          Say hi to start the conversation 👋
        </div>
      ) : (
        messages.map((msg, index) => {
          const isLast = index === messages.length - 1;
          return (
            <div key={index} ref={isLast ? lastMessageRef : null}>
              <Message message={msg} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default MiddlePart;
