import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/FirebaseApp";
import React, { useState } from "react";

const AccountPage = () => {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        alert(`Sign In With Google Successful. Welcome ${res.user.email}`);
      })
      .catch((error) => {
        alert(`Error ${error.message}`);
      });
  };
  return (
    <>
      {/* 
  html, body{
    font-family: 'Roboto', sans-serif;
  }

  .break-inside {
    -moz-column-break-inside: avoid;
    break-inside: avoid;
  }
  body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
    line-height: 1.5;
  } */}

      {/* <!-- Example --> */}
      <div className="flex max-w-screen-xl mx-auto mt-4">
        {/* <!-- Container --> */}
        <div className="flex flex-row w-full gap-3">
          {/* <!-- Sidebar --> */}
          <div className="hidden lg:flex flex-col justify-between bg-black lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg rounded-lg shadow-slate-600 shadow-xl">
            <div className="space-y-5">
              <h1 className=" text-white lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                Enter your account and discover new experiences
              </h1>
              <p className=" text-white text-lg">You do not have an account?</p>
              <button
                onClick={() => handleBasicClick("tab2")}
                className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-white text-white shadow-slate-200 shadow-inner"
              >
                Create account here
              </button>
            </div>
            <p className="font-medium mt-4 text-white">© 2023 Crypto Tracker</p>
          </div>

          {/* <!-- AccountPage --> */}
          <div className=" w-full px-10">
            <TETabs justify>
              <TETabsItem
                onClick={() => handleBasicClick("tab1")}
                active={basicActive === "tab1"}
                color="dark"
              >
                Login
              </TETabsItem>
              <TETabsItem
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
                color="dark"
              >
                Signup
              </TETabsItem>
            </TETabs>

            <TETabsContent>
              <TETabsPane show={basicActive === "tab1"}>
                <Login />
              </TETabsPane>
              <TETabsPane show={basicActive === "tab2"}>
                <SignUp />
              </TETabsPane>
            </TETabsContent>
            <hr className="my-6 border-gray-300 w-full" />
            <button
              type="button"
              onClick={signInWithGoogle}
              className="w-full block bg-white text-black hover:bg-black hover:fill-black hover:text-white   border-slate-900 border  font-semibold rounded-lg px-4 py-3"
            >
              <div className="flex items-center justify-center  hover:text-white">
                <img
                  className="w-6 h-6"
                  src="https://img.icons8.com/color/144/google-logo.png"
                  alt="google-logo"
                />
                <span className="ml-4">Sign in with Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
