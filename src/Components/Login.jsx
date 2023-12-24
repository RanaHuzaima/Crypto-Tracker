import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/FirebaseApp";

const Login = ({ handleclose }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Please fill all the Fields");
    }

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      alert(`Login Successful, Welcome ${result.user.email}`);
    } catch (error) {
      alert(`Error ${error.message}`);
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
            className="w-full px-4 py-3 text-black rounded-lg bg-gray-200 mt-2 border focus:border-slate-900 focus:bg-white focus:outline-none"
            autofocus
            autocomplete
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
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
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full block bg-white text-black hover:bg-black hover:text-white   border-slate-900 border font-semibold rounded-lg
px-4 py-3 mt-6"
        >
          Log In
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
          <span className="ml-4">Login with Google</span>
        </div>
      </button>
    </>
  );
};

export default Login;
