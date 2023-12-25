import React, { useEffect, useState } from "react";

import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/FirebaseApp";

const AuthModel = () => {
  const [showModal, setShowModal] = useState(false);
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
        setShowModal(false);
      })
      .catch((error) => {
        alert(`Error ${error.message}`);
      });
  };

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          type="button"
          className="text-black font-medium rounded-lg text-sm px-4 py-2 text-center border border-slate-900 hover:bg-black hover:text-white "
        >
          Login
        </button>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog centered className="">
          <TEModalContent className=" flex items-center justify-center">
            <div className="mb-3 w-[80%]">
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
                  <Login handleclose={setShowModal} />
                </TETabsPane>
                <TETabsPane show={basicActive === "tab2"}>
                  <SignUp handleclose={setShowModal} />
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
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default AuthModel;
