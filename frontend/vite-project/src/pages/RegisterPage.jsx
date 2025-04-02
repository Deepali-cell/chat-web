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
        navigate("/loginpage");
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
    <div className="md:px-10 mb-5 mx-20 mt-20">
      <form
        onSubmit={handlesubmit}
        className="border border-gray-300 rounded-lg px-10 py-2 mx-[22em]"
      >
        <h1 className="text-gray-500 font-medium text-2xl py-2">
          Create Account
        </h1>
        <p>Please sign up to book an appointment</p>

        <label className="input input-bordered flex items-center gap-2 my-4">
          <input
            type="text"
            className="grow"
            placeholder="Username"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            required
          />
        </label>

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
            Create Account
          </button>
        </div>

        <p className="text-left">
          Already have an account?{" "}
          <a href="/loginpage" className="text-blue-500 underline">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};
