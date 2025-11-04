import { useContext } from "react";
import { myContext } from "../../../context/StateProvider";

function NoMessagePart() {
  const { user } = useContext(myContext);

  if (!user) return null;

  return (
    <div className="h-full flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-xl font-semibold">{user.username}</h1>
      <p className="text-gray-300 mt-2">
        Welcome to the chatting app 👋 <br />
        Select a conversation to start chatting.
      </p>
    </div>
  );
}

export default NoMessagePart;
