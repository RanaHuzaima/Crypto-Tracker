import React, { useEffect, useState, lazy, Suspense } from "react";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/FirebaseApp";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

const Login = lazy(() => import("../Components/Login"));
const SignUp = lazy(() => import("../Components/SignUp"));

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
        toast.success(`Welcome ${res.user.email}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.error(`Error ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex max-w-screen-xl mx-auto mt-4">
        <div className="flex flex-row w-full gap-3">
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
              <Suspense fallback={<div>Loading...</div>}>
                <TETabsPane show={basicActive === "tab1"}>
                  <Login />
                </TETabsPane>
                <TETabsPane show={basicActive === "tab2"}>
                  <SignUp />
                </TETabsPane>
              </Suspense>
            </TETabsContent>
            <hr className="my-6 border-gray-300 w-full" />
            <button
              type="button"
              onClick={signInWithGoogle}
              className=" border font-bold bg-white text-black hover:bg-black hover:text-white border-slate-900 rounded-lg  px-4 py-3 w-full shadow-slate-400 shadow-inner block overflow-hidden"
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
