import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/FirebaseApp";
import { useAuth } from "../Context/AuthContext";

const Login = ({ handleclose }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { loginAction } = useAuth();

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Please fill all the Fields");
    } else {
      loginAction(loginEmail, loginPassword);
      handleclose(false);
      return;
    }
  };

  return (
    <>
      <form className="mt-6" onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 text-black rounded-lg bg-gray-200 mt-2 border focus:border-slate-900 focus:bg-white focus:outline-none"
            autoFocus
            autoComplete="username"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Enter Password"
            minLength="6"
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
    </>
  );
};

export default Login;
