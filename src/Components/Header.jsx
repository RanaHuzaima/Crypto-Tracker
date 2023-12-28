import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import UserSidebar from "./UserSidebar";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  const { user } = useAuth();
  return (
    <nav className=" sm:px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:mx-auto mx-3 p-4 border rounded-lg mt-2 border-slate-900">
        <Link
          to={`${user ? "/Dashboard" : "/"}`}
          className="flex items-center md:gap-3 gap-1 rtl:space-x-reverse"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0wIDE4di0xLjUxMWgtLjV2MS41MTFoLTF2LTEuNTExaC0yLjQ4NGwuMjUtMS40ODloLjUzOWMuNDQyIDAgLjY5NS0uNDI1LjY5NS0uODU0di00LjQ0NGMwLS40MTYtLjI0Mi0uNzAyLS42ODMtLjcwMmgtLjgxN3YtMS41aDIuNXYtMS41aDF2MS41aC41di0xLjVoMXYxLjUyNmMyLjE1OC4wNzMgMy4wMTIuODkxIDMuMjU3IDEuODEyLjI5IDEuMDktLjQyOSAyLjAwNS0xLjA0NiAyLjIyOC43NS4xOTIgMS43ODkuNzQ2IDEuNzg5IDIuMDI2IDAgMS43NDItMS4zNDQgMi45MDgtNCAyLjkwOHYxLjVoLTF6bS0uNS01LjUwM3YyLjUwM2MxLjk4NCAwIDMuMzQ0LS4xODggMy4zNDQtMS4yNTggMC0xLjE0OC0xLjQ2OS0xLjI0NS0zLjM0NC0xLjI0NXptMC0uOTk3YzEuMTA1IDAgMi43ODktLjA3OCAyLjc4OS0xLjI1IDAtMS0xLjAzOS0xLjI1LTIuNzg5LTEuMjV2Mi41eiIvPjwvc3ZnPg=="
            className="h-8 w-8"
            alt="Crypto Tracker Logo"
          />
          <span className="self-center text-xl md:text-2xl font-bold whitespace-nowrap">
            Crypto Tracker
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 gap-8">
          <div className=" items-center justify-center sm:flex  hidden">
            <ul className=" flex items-center justify-center gap-8">
              <li className=" text-lg font-semibold cursor-pointer">
                <NavLink to={`${user ? "/Dashboard" : "/"}`}>
                  {`${user ? "Dashboard" : "Home"}`}
                </NavLink>
              </li>
              <li className=" text-lg font-semibold cursor-pointer">
                <NavLink to="/About">About</NavLink>
              </li>
              <li className=" text-lg font-semibold cursor-pointer">
                <NavLink to="/Contact-us">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          {user ? (
            <UserSidebar userData={user} />
          ) : (
            <Button
              BtnText={"Account"}
              px={3}
              py={2}
              bgColor={"white"}
              hoverbg={"black"}
              onclick={"/Account"}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
