import { useContext } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../context/StateProvider";

function BottomPart() {
  const { setusertoken } = useContext(myContext);
  const navigate = useNavigate();
  
  const handleLoginbtn = () => {
    localStorage.removeItem("usertoken");
    setusertoken(false);
    navigate("/loginpage");
  };

  return (
    <>
      <div className="h-[10vh] py-2 w-full">
        <RiLogoutCircleLine
          className="text-2xl cursor-pointer"
          onClick={handleLoginbtn}
        />
      </div>
    </>
  );
}

export default BottomPart;
