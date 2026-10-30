import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Header_LOGO } from "../utils/constants"

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect (() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
        // ...
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  },[]);
  return (
    <div className="absolute w-screen py-8 px-16 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-36"
        src= {Header_LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img className="w-10 h-10" src={user.photoURL} alt="usericon"></img>
          <button onClick={handleSignout} className="text-white font-bold">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
