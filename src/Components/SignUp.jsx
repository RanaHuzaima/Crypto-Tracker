import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../Firebase/FirebaseApp";

const SignUp = ({ handleclose }) => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (
      signupEmail !== "" &&
      signupPassword !== "" &&
      signupConfirmPassword !== ""
    ) {
      if (signupPassword !== signupConfirmPassword) {
        alert("Passwords do not match");
      } else {
        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            signupEmail,
            signupPassword
          );

          handleclose(false);
          alert(`Sign up Successful ${result.user.email}`);
        } catch (error) {
          alert(`Error ${error.message}`);
        }
      }
    }
  };
  return (
    <>
      <form className="mt-6" onSubmit={HandleSubmit}>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-slate-900 focus:bg-white focus:outline-none"
            autofocus
            autocomplete
            required
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            minlength="6"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-slate-900
                focus:bg-white focus:outline-none"
            required
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            minlength="6"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-slate-900
                focus:bg-white focus:outline-none"
            required
            value={signupConfirmPassword}
            onChange={(e) => setSignupConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full block bg-white text-black hover:bg-black hover:text-white   border-slate-900 border font-semibold rounded-lg
              px-4 py-3 mt-6"
        >
          Sign Up
        </button>
      </form>
      <hr className="my-6 border-gray-300 w-full" />
      <button
        type="button"
        className="w-full block bg-white text-black hover:bg-black hover:fill-black hover:text-white   border-slate-900 border  font-semibold rounded-lg px-4 py-3"
      >
        <div className="flex items-center justify-center  hover:text-white">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/color/144/google-logo.png"
            alt="google-logo"
          />
          <span className="ml-4">Sign Up with Google</span>
        </div>
      </button>
    </>
  );
};

export default SignUp;
