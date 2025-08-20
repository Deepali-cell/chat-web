import { useContext, useState } from "react";
import { myContext } from "../context/StateProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const LoginPage = () => {
  const { backend_url, setusertoken } = useContext(myContext);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Both fields are required.");
      return;
    }

    try {
      const { data } = await axios.post(`${backend_url}/api/user/login`, {
        email,
        password,
      });
      if (data.success) {
        localStorage.setItem("usertoken", data.usertoken);
        setusertoken(data.usertoken);
        toast.success("User logged in successfully.");
        navigate("/");
        setemail("");
        setpassword("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="md:px-10 mb-5 mx-20 mt-20">
      <form
        onSubmit={handlelogin}
        className="border border-gray-300 rounded-lg px-10 py-2 mx-[22em]"
      >
        <h1 className="text-gray-500 font-medium text-2xl py-2">Login</h1>
        <p>Please login to book an appointment</p>

        <label className="input input-bordered flex items-center gap-2 my-4">
          <input
            type="email"
            className="grow"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 my-4">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            required
          />
        </label>

        <div className="flex items-center justify-center my-4">
          <button
            type="submit"
            className="bg-blue-500 px-10 rounded-md w-full py-2 text-white"
          >
            Login Account
          </button>
        </div>

        <p className="text-left">
          Create a new account?{" "}
          <a href="/registerpage" className="text-blue-500 underline">
            Click here
          </a>
        </p>
      </form>
    </div>
  );
};
