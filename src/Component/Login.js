import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, SetisSignIn] = useState(true)
    const toggleSignInForm = () => {
        SetisSignIn(!isSignIn)
    }
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_large.jpg"
            alt="logo"
          ></img>
        </div>
        <form className="w-[285px] absolute bg-black/75 top-24 left-1/2 -translate-x-1/2 text-white rounded-lg p-5">
          <h1 className="font-bold text-xl mb-8 mt-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && <input
            type="text"
            placeholder="Name"
            className="h-10 w-full px-4 py-3 my-2 bg-gray-700 rounded"
          />}
          <input
            type="text"
            placeholder="email address"
            className="h-10 w-full px-4 py-3 my-2 bg-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="password"
            className="h-10 w-full px-4 py-3 my-2 bg-gray-700 rounded"
          />
          <button className="h-10 pb-1.5 my-6 bg-red-700 w-full rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm px-2 mb-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up" : "Already a User? Sign in"}</p>
        </form>
      </div>
    </>
  );
};

export default Login;
