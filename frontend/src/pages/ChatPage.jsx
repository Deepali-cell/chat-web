import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";

function ChatPage() {
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row overflow-hidden">
      {/* LEFT PANEL */}
      <div className="bg-black text-white sm:w-[30%] w-full h-[40%] sm:h-full">
        <LeftPart />
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-white h-[60%] sm:h-full">
        <RightPart />
      </div>
    </div>
  );
}

export default ChatPage;
