import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component is unmount
    return() => unsubscribe();
  }, []);

  const gptHandleClick = () => {
     dispatch(toggleGptSearchView());
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex p-2">
          <button className="py-2 px-4 text-white bg-red-800 rounded-lg mx-4 my-2 font-semibold" onClick={gptHandleClick}>GPT Search</button>
          <div className="flex flex-col">
          <img
            className="cursor-pointer pl-2"
            alt="user-icon"
            src={user?.photoURL}
            style={{ height: "35px", width: "45px" }}
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign out
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
