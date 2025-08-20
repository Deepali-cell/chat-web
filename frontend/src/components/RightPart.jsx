import useConversation from "../zustand/useConversation";
import BootomPart from "./rightParts/chatPart/BootomPart";
import MiddlePart from "./rightParts/chatPart/MiddlePart";
import NoMessagePart from "./rightParts/chatPart/NoMessagePart";
import TopPart from "./rightParts/chatPart/TopPart";

function RightPart() {
  const { selectedConversation } = useConversation();
  return (
    <div className="w-[70%] bg-gray-700 text-white ">
      {selectedConversation ? (
        <>
          {" "}
          <TopPart />
          <MiddlePart />
          <BootomPart />
        </>
      ) : (
        <>
          {" "}
          <NoMessagePart />
        </>
      )}
    </div>
  );
}

export default RightPart;
