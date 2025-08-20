import { useEffect, useRef } from "react";
import useGetmessages from "../../../context/useGetmessages";
import Message from "./Message";
import useGetsocketmessage from "../../../context/useGetsocketmessage.js";

function MiddlePart() {
  const { messages } = useGetmessages();
  useGetsocketmessage();
  const lastmessageRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (lastmessageRef.current) {
        lastmessageRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);
  return (
    <>
      {messages.length === 0 ? (
        <div
          className="scroll-container pt-2 mx-10 h-full flex justify-center items-center"
          style={{ maxHeight: "calc(90vh - 10vh)" }}
        >
          <h1 className="">Say Hi to start the Conversation</h1>
        </div>
      ) : (
        <div
          className="scroll-container pt-2 mx-10 h-full"
          style={{ maxHeight: "calc(90vh - 10vh)" }}
        >
          {" "}
          {messages.map((message, index) => {
            const isLastMessage = index === messages.length - 1;
            return (
              <div key={index} ref={isLastMessage ? lastmessageRef : null}>
                <Message message={message} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MiddlePart;
