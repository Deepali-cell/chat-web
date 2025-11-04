import { useContext } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../context/StateProvider";

function BottomPart() {
  const { setusertoken } = useContext(myContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usertoken");
    setusertoken(null);
    navigate("/loginpage");
  };

  return (
    <div className="py-3 w-full flex items-center justify-start border-t border-gray-700">
      <RiLogoutCircleLine
        className="text-3xl cursor-pointer"
        onClick={handleLogout}
      />
    </div>
  );
}

export default BottomPart;
