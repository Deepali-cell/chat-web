import { useContext, useState } from "react";
import { myContext } from "../../context/StateProvider";
import useConversation from "../../zustand/useConversation";
import { toast } from "react-toastify";

function TopPart() {
  const [search, setSearch] = useState("");
  const { alluser } = useContext(myContext);
  const { setSelectedConversation } = useConversation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;

    const person = alluser.find((u) =>
      u.username.toLowerCase().includes(search.toLowerCase())
    );

    if (person) {
      setSelectedConversation(person);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="p-2 bg-black">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search user..."
          className="w-full bg-gray-800 text-white p-2 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TopPart;
