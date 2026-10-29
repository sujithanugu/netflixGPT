import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkUserValidation } from "../utils/ValidateSignIn";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, SetisSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    SetisSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const u_name = useRef(null);

  const handleValidation = () => {
    const errorValue = checkUserValidation(
      email.current.value,
      password.current.value,
      isSignIn ? undefined : u_name.current?.value,
    );
    SetErrorMessage(errorValue);
    if (errorValue) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: u_name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorMessage);
          // ..
        });
    } else {
      //Test@123456
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorMessage);
        });
    }
  };
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[285px] absolute bg-black/75 top-24 left-1/2 -translate-x-1/2 text-white rounded-lg p-5"
        >
          <h1 className="font-bold text-xl mb-8 mt-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={u_name}
              type="text"
              placeholder="Name"
              className="h-10 w-full px-4 py-3 my-2 bg-gray-700 rounded"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="email address"
            className="h-10 w-full px-4 py-3 my-2 bg-gray-700 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="h-10 w-full px-4 py-3 my-2 bg-gray-700 rounded"
          />
          <p className="text-m font-bold text-red-700">{errorMessage}</p>
          <button
            className="h-10 pb-1.5 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleValidation}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-sm px-2 mb-4 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "New to Netflix? Sign Up" : "Already a User? Sign in"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
