import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSinginForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign in" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded  bg-gray-800"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 text-white rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded  bg-gray-800"
        />

        <button className="my-6 p-4 bg-red-700 w-full rounded">
          {isSignIn ? "Sign in" : "Sign Up"}
        </button>
        
        <p className="py-4 cursor-pointer" onClick={toggleSinginForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
