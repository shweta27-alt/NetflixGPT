import React, { useState, useRef} from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSinginForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClickButton = () =>{
    //validate the form data
    if(isSignIn){
      handleSignIn();
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage)
      });

    }else{
      handleSignUp();
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage)
      });
    }  
  }

  const handleSignIn = () => {
    const message = checkValidData( email.current.value, password.current.value)
    setErrorMessage(message)
    if(message) return;
  }

  const handleSignUp = () => {
    let message = checkValidData( name.current.value, email.current.value, password.current.value)
    setErrorMessage(message);
    if(message) return;
  }
  
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign in" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded  bg-gray-800"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 text-white rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded  bg-gray-800"
        />
       
       <p className="text-red-500 font-bold text-md py-2">{errorMessage}</p>
        <button className="my-6 p-4 bg-red-700 w-full rounded" onClick={handleClickButton}>
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
