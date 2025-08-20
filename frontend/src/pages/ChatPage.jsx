import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";

function ChatPage() {
  return (
    <>
      <div className=" h-screen w-full flex">
        <LeftPart />
        <RightPart />
      </div>
    </>
  );
}

export default ChatPage;
