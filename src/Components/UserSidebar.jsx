import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/FirebaseApp";

const UserSidebar = ({ userData }) => {
  const [isopen, setIsopen] = useState(false);

  const handleIsOpen = () => {
    setIsopen(!isopen);
  };
  const handleLogout = () => {
    signOut(auth);
    setIsopen(!isopen);
  };
  return (
    <>
      <img
        src={userData.photoURL}
        className="w-12 h-12 rounded-full shadow-lg cursor-pointer object-contain"
        alt="User-Avatar"
        onClick={handleIsOpen}
      />
      <div className={` ${isopen ? "block" : "hidden"}`}>
        {/* <!-- Sidebar Overlay --> */}
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-out duration-75 delay-150"
            onClick={handleIsOpen}
          ></div>
          {/* <!-- Sidebar Content --> */}
          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                {/* <!-- Sidebar Header --> */}
                <div className=" flex justify-end px-4">
                  <button
                    x-on:click="open = false"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setIsopen(!isopen)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      x-description="Heroicon name: x"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="mt-2 px-4 flex justify-center">
                  <img
                    src={userData.photoURL}
                    className=" w-40 h-40 rounded-full shadow-lg cursor-pointer object-contain"
                    alt="User-Avatar"
                    onClick={handleIsOpen}
                  />
                </div>

                <div className="mt-4 px-4 flex justify-center">
                  <h1>{userData.displayName || userData.email}</h1>
                </div>
                <div className="mt-4 px-4 flex justify-center">
                  <p className="ml-2 text-gray-400">Watchlist</p>
                </div>
                {/* <!-- Sidebar Content --> */}
                <div className="mt-4 px-4 py-2 h-full overflow-y-scroll border mx-3 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                    {/* <!-- Card 1 --> */}
                    <div className=" hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-slate-900 transition-colors duration-300 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-black">
                        Bitcoin
                      </h3>
                      <span>$5524.02</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 px-4 flex justify-center">
                  <button
                    className=" border w-full border-slate-900 rounded-lg text-black text-xl py-3 hover:bg-black hover:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
