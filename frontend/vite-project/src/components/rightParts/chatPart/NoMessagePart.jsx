import { useContext } from "react";
import { myContext } from "../../../context/StateProvider";

function NoMessagePart() {
  const { user, usertoken } = useContext(myContext);
  return (
    user && (
      <>
        {" "}
        <div className=" h-full flex flex-col justify-center items-center">
          <h1>{user.username}</h1>
          <h1 className=""> {"  "}Welcome to the chatting app</h1>
        </div>{" "}
      </>
    )
  );
}

export default NoMessagePart;
