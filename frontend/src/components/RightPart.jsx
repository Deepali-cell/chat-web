import useConversation from "../zustand/useConversation";
import BootomPart from "./rightParts/chatPart/BootomPart";
import MiddlePart from "./rightParts/chatPart/MiddlePart";
import NoMessagePart from "./rightParts/chatPart/NoMessagePart";
import TopPart from "./rightParts/chatPart/TopPart";

function RightPart() {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex-1 h-full bg-gray-700 text-white flex flex-col">
      {selectedConversation ? (
        <>
          <TopPart />

          <div className="flex-1 overflow-y-auto">
            <MiddlePart />
          </div>

          <BootomPart />
        </>
      ) : (
        <NoMessagePart />
      )}
    </div>
  );
}

export default RightPart;
