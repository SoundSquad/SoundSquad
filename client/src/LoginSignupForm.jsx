import logo from "./assets/logo.png";
import { FcGoogle } from "react-icons/fc";

function LoginSignupForm() {
  return (
    <>
      <main className="bg-gray-100 flex flex-col items-center justify-center h-screen ">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <img src={logo} alt="Logo" className="w-36 h-16" />
            <div className="py-5">
              <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
                Login
              </h2>
              <div className="border-2 w-24 border-red-600 inline-block mb-2 ml-32"></div>
              <div className="flex justify-center my-2">
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
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  className="bg-gray-100 w-64 p-2 mb-2 rounded-md"
                  placeholder="ID"
                />
                <input
                  type="password"
                  className="bg-gray-100 w-64 p-2 rounded-md mb-8"
                  placeholder="PW"
                />
                <a
                  href="#"
                  className="border-2 border-red-600 rounded-full px-12 py-2 inline-block font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
          {/*Login section*/}
          <div className="w-2/5 bg-red-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-10">
            <h2 className="text-3xl font-bold mb-2">SoundSquad</h2>
            <div className="border-2 w-54 border-white ml-2 mb-5"></div>
            <p className="mb-10 ml-3">
              Creat unforgettable concert experiences with us
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-600"
            >
              Sign up
            </a>
          </div>
          {/*Signup section*/}
        </div>
      </main>
    </>
  );
}

export default LoginSignupForm;
