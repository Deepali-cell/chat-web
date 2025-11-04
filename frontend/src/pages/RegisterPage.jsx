import { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { myContext } from "../context/StateProvider";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const { backend_url, setusertoken } = useContext(myContext);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const { data } = await axios.post(`${backend_url}/api/user/register`, {
        username,
        email,
        password,
      });
      if (data.success) {
        localStorage.setItem("usertoken", data.usertoken);
        setusertoken(data.usertoken);
        toast.success("User signed up successfully.");
        navigate("/");
        setemail("");
        setpassword("");
        setusername("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="w-full flex justify-center mt-20 px-4 sm:px-6 lg:px-0">
      <form
        onSubmit={handlesubmit}
        className="
          w-full max-w-md 
          border border-gray-300 rounded-lg 
          px-6 py-6 
          shadow-sm
        "
      >
        <h1 className="text-gray-700 font-semibold text-2xl text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please sign up to book an appointment
        </p>

        <label className="input input-bordered flex items-center gap-2 my-4 w-full">
          <input
            type="text"
            className="grow"
            placeholder="Username"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 my-4 w-full">
          <input
            type="email"
            className="grow"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 my-4 w-full">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition w-full py-2 rounded-md text-white font-medium mt-4"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/loginpage" className="text-blue-500 underline">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};
