import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="shadow-md w-full mx-auto rounded-lg max-w-[570px] md:p-10">
        <h3 className="text-headingColor text-[22px] text-center leading-9 font-bold mb-10 ">
          Hello! <span className="text-primaryColor ">Welcome</span> Back 🎉
        </h3>

        <form action="submit" className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer mb-2 "
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer mb-2 "
              required
            />
          </div>

          <div className="mt-7">
            <button
              className="btn w-full rounded-md"
              type="submit"
              onSubmit={handleSubmit}
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apost;t have an account?
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
