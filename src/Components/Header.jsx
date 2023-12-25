import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthModel from "./AuthModel";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/FirebaseApp";
import UserSidebar from "./UserSidebar";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:mx-auto mx-3 p-4 border rounded-lg mt-2 border-slate-900">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0wIDE4di0xLjUxMWgtLjV2MS41MTFoLTF2LTEuNTExaC0yLjQ4NGwuMjUtMS40ODloLjUzOWMuNDQyIDAgLjY5NS0uNDI1LjY5NS0uODU0di00LjQ0NGMwLS40MTYtLjI0Mi0uNzAyLS42ODMtLjcwMmgtLjgxN3YtMS41aDIuNXYtMS41aDF2MS41aC41di0xLjVoMXYxLjUyNmMyLjE1OC4wNzMgMy4wMTIuODkxIDMuMjU3IDEuODEyLjI5IDEuMDktLjQyOSAyLjAwNS0xLjA0NiAyLjIyOC43NS4xOTIgMS43ODkuNzQ2IDEuNzg5IDIuMDI2IDAgMS43NDItMS4zNDQgMi45MDgtNCAyLjkwOHYxLjVoLTF6bS0uNS01LjUwM3YyLjUwM2MxLjk4NCAwIDMuMzQ0LS4xODggMy4zNDQtMS4yNTggMC0xLjE0OC0xLjQ2OS0xLjI0NS0zLjM0NC0xLjI0NXptMC0uOTk3YzEuMTA1IDAgMi43ODktLjA3OCAyLjc4OS0xLjI1IDAtMS0xLjAzOS0xLjI1LTIuNzg5LTEuMjV2Mi41eiIvPjwvc3ZnPg=="
            className="h-8"
            alt="Crypto Tracker Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Crypto Tracker
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          {user ? <UserSidebar userData={user} /> : <AuthModel />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
