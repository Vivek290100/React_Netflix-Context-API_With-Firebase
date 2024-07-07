import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className=" max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3x1 font-bold">Sign In</h1>
            <form className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="email"
                autoComplete="email"
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center textsm text-gray-600">
                <p>
                  <input type="checkbox" />
                  Remember me{" "}
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribed to Netflix
                </span>
                {""} <Link to="/Signup">Sign Up</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
