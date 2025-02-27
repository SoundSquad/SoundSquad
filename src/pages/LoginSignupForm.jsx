import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { TbWashDryP } from "react-icons/tb";

function LoginSignupForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginData, setLoginData] = useState({ user_id: "", user_pw: "" });
  const [signupData, setSignupData] = useState({
    user_id: "",
    user_pw: "",
    user_gender: "",
    user_bd: "",
  });

  const [error, setError] = useState("");

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError("");
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        loginData
      );
      const { user_num } = response.data;
      console.log("login sucess", response.data);
      localStorage.setItem("user_num", user_num);

      if (user_num) {
        localStorage.setItem("user_num", user_num);
        console.log("user_num stored in localStorage:", localStorage.getItem("user_num"));  // 저장 확인 로그
        navigate('/');
      } else {
        throw new Error("User number not found in response");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "login failed");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/user/register",
        signupData
      );
      console.log("signup sucess", response.data);
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl relative overflow-hidden">
        {/* Login Form */}
        <div
          className={`w-1/2 p-5 transition-all duration-700 ease-in-out z-20 ${
            isLoginMode ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img src={logo} alt="Logo" className="w-36 h-16" />
          <div className="py-5">
            <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
              Login
            </h2>
            <div className="border-2 w-20 border-red-600 mx-auto mb-7"></div>
            <div className="flex justify-center my-2">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FcGoogle className="text-lg" />
              </a>
            </div>
            <p className="text-center text-gray-400 my-3">
              or use your account
            </p>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleLogin} className="flex flex-col items-center">
              <input
                type="text"
                name="user_id"
                className="bg-gray-100 w-64 p-2 mb-2 rounded-md"
                placeholder="ID"
                value={loginData.user_id}
                onChange={handleLoginChange}
              />
              <input
                type="password"
                name="user_pw"
                className="bg-gray-100 w-64 p-2 rounded-md mb-8"
                placeholder="Password"
                value={loginData.user_pw}
                onChange={handleLoginChange}
              />
              <button
                type="submit"
                className="border-2 border-red-600 rounded-full px-12 py-2 inline-block font-semibold text-red-600 hover:bg-red-600 hover:text-white"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        {/* Signup Form */}
        <div
          className={`w-1/2 p-5 transition-all duration-700 ease-in-out absolute top-0 right-0 z-10 ${
            isLoginMode ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <img src={logo} alt="Logo" className="w-36 h-16" />
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
              Sign Up
            </h2>
            <div className="border-2 w-28 border-red-600 mx-auto mb-6"></div>

            <form
              onSubmit={handleSignup}
              className="flex flex-col items-center"
            >
              <input
                type="text"
                name="user_id"
                className="bg-gray-100 w-64 p-2 mb-2 rounded-md"
                placeholder="ID"
                value={signupData.user_id}
                onChange={handleSignupChange}
              />
              <input
                type="password"
                name="user_pw"
                className="bg-gray-100 w-64 p-2 rounded-md mb-2"
                placeholder="Password"
                value={signupData.user_pw}
                onChange={handleSignupChange}
              />
              <select
                name="user_gender"
                className="bg-gray-100 w-64 p-2 rounded-md mb-2"
                value={signupData.user_gender}
                onChange={handleSignupChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                name="user_bd"
                className="bg-gray-100 w-64 p-2 rounded-md mb-8"
                value={signupData.user_bd}
                onChange={handleSignupChange}
              >
                <option value="">Select Age Group</option>
                <option value="10s">10-19</option>
                <option value="20s">20-29</option>
                <option value="30s">30-39</option>
                <option value="40s">40-49</option>
                <option value="50+">50 or more</option>
              </select>
              <button
                type="submit"
                className="border-2 border-red-600 rounded-full px-12 py-2 inline-block font-semibold text-red-600 hover:bg-red-600 hover:text-white"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Red Section */}
        <div
          className={`w-1/2 bg-red-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-10 transition-all duration-700 ease-in-out absolute top-0 right-0 z-30 ${
            isLoginMode ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">SoundSquad</h2>
          <div className="border-2 w-48 border-white mx-auto mb-5"></div>
          <p className="mb-10 ml-3">
            {isLoginMode
              ? "Create unforgettable concert experiences with us, where every moment is designed to leave a lasting impression and exceed your expectations. "
              : "Welcome back! let's enjoy the unforgettable concert experiences with us"}
          </p>
          <div className="flex justify-center">
            <button
              onClick={toggleMode}
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-600"
            >
              {isLoginMode ? "Sign up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginSignupForm;
