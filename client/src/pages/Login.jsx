import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { authContext } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          role: result.role,
          token: result.token,
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="shadow-md w-full mx-auto rounded-lg max-w-[570px] md:p-10">
        <h3 className="text-headingColor text-[22px] text-center leading-9 font-bold mb-10 ">
          Hello! <span className="text-primaryColor ">Welcome</span> Back 🎉
        </h3>

        <form onSubmit={handleSubmit} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer mb-2 "
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer mb-2 "
              required
            />
          </div>

          <div className="mt-7">
            <button
              className="btn w-full rounded-md"
              disabled={loading && true}
              type="submit"
            >
              {loading ? <HashLoader size={25} color="#ffffff" /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?
            <Link to="/register" className="text-primaryColor ">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
