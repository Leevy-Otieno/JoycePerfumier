import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import imageToBase64 from "../helpers/imageToBase64";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleUploadpic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageToBase64(file);
    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
    console.log("imagePic", imagePic);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("data signup", data);
  return (
    <section id="signup">
      <div className="max-auto container px-4 mt-10 mb-10 ">
        <div className="bg-white p-5 w-full max-w-sm mx-auto ">
          <div className="w-20 h-20 mx-auto relative overflow-auto border-2 border-gray-300 rounded-full">
            <div>
              <img
                src={data.profilePic || loginIcons}
                alt="login icons"
                className="w-20 mx-auto"
              />
            </div>
            <form>
              <label>
                <div className="text-xs bg-slate-200 py-2 text-center absolute bottom-0  w-full cursor-pointer hover:bg-slate-300 overflow-hidden rounded-full bg-opacity-75 pb-2 px-2">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  display="none"
                  onChange={handleUploadpic}
                ></input>
              </label>
            </form>
          </div>

          <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
            <div className="grid">
              <label>Name:</label>
              <div className="bg-slate-200 p-2">
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  value={data.name}
                  placeholder="Enter your name"
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div></div>

            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-200 p-2">
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={data.email}
                  placeholder="Enter your email"
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password:</label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={handleChange}
                  name="password"
                  value={data.password}
                  className="h-full w-full outline-none bg-transparent"
                />

                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  text-xl
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>

              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-amber-600 mt-1"
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <label>Confirm Password:</label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  onChange={handleChange}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  className="h-full w-full outline-none bg-transparent"
                />

                <div
                  className="cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  text-xl
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-amber-600 mt-1"
              >
                Forgot Password?
              </Link>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4">
              Sign Up
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-amber-500 hover:underline hover:text-amber-600 my-5"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
