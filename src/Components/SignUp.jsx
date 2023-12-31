import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const { SignUpAction } = useAuth();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (
      signupEmail !== "" &&
      signupPassword !== "" &&
      signupConfirmPassword !== ""
    ) {
      if (signupPassword !== signupConfirmPassword) {
        toast.error("Passwords do not match", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      } else {
        SignUpAction(signupEmail, signupPassword);
        return;
      }
    }
  };
  return (
    <>
      <form className="mt-6" onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="signupEmail" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="signupEmail"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-slate-900 focus:bg-white focus:outline-none"
            autoFocus
            autoComplete="email"
            required
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="signupPassword" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="signupPassword"
            autoComplete="new-password"
            placeholder="Enter Password"
            minLength="6"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-slate-900
                focus:bg-white focus:outline-none"
            required
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="signupConfirmPassword"
            className="block text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="signupConfirmPassword"
            autoComplete="new-password"
            placeholder="Enter Confirm Password"
            minLength="6"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-slate-900
                focus:bg-white focus:outline-none"
            required
            value={signupConfirmPassword}
            onChange={(e) => setSignupConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" border font-bold bg-white text-black hover:bg-black hover:text-white border-slate-900 rounded-lg  px-4 py-3 mt-6 w-full shadow-slate-400 shadow-inner block overflow-hidden"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
