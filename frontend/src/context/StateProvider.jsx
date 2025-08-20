import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";


export const myContext = createContext();

const StateProvider = ({ children }) => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [usertoken, setusertoken] = useState(
    localStorage.getItem("usertoken") || null
  );
  const [alluser, setalluser] = useState([]);
  const [user, setuser] = useState([]);

  const getallusers = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/api/user/allusers`, {
        headers: { Authorization: `Bearer ${usertoken}` },
      });
      if (data.success) {
        setalluser(data.users);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };
  const getUser = async () => {
    if (!usertoken) return;

    try {
      const { data } = await axios.get(`${backend_url}/api/user/getprofile`, {
        headers: {
          Authorization: `Bearer ${usertoken}`,
        },
      });

      if (data.success) {
        setuser(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching user data. Please try again later.");
    }
  };
  useEffect(() => {
    getallusers();
  }, [usertoken]);

  useEffect(() => {
    getUser();
  }, [usertoken]);


  const value = {
    backend_url,
    usertoken,
    setusertoken,
    alluser,
    setalluser,
    getallusers,
    user,
    setuser,
    getUser,
  };

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};

export default StateProvider;
