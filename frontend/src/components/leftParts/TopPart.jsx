import { useContext, useState } from "react";
import { myContext } from "../../context/StateProvider";
import useConversation from "../../zustand/useConversation";
import { toast } from "react-toastify";
import { IoMenu } from "react-icons/io5";

function TopPart() {
  const [search, setSearch] = useState("");
  const { alluser } = useContext(myContext);
  const { setSelectedConversation } = useConversation();

  const handlesearchingbar = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = alluser.find((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="bg-black p-4 flex items-center justify-between">
      <label htmlFor="my-drawer-2" className="cursor-pointer">
        <IoMenu className="text-white text-2xl" />
      </label>
      <form onSubmit={handlesearchingbar} className="flex-grow mx-4">
        <label className="input input-bordered bg-gray-800 border-gray-600 flex items-center">
          <input
            type="text"
            className="grow bg-transparent text-white placeholder-gray-400"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 text-white"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </form>
    </div>
  );
}

export default TopPart;
