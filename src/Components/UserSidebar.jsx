import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/FirebaseApp";
import { useAuth } from "../Context/AuthContext";
import "/userpic.jpg";
import { toast } from "react-toastify";
import { TERipple } from "tw-elements-react";
import { useSelector } from "react-redux";
import { useSelectCurrencySign } from "../Redux/Slices/CurrencySignSlice";
import { useSelectTime } from "../Redux/Slices/TimeSelectSlice.js";
import { useSelectCurrencySelect } from "../Redux/Slices/CurrencySelectSlice.js";
import { Link } from "react-router-dom";

const UserSidebar = ({ userData }) => {
  const { watchlist } = useAuth();
  const { selectedSign } = useSelector(useSelectCurrencySign);
  const { selectedTime } = useSelector(useSelectTime);
  const { selectedCurrency } = useSelector(useSelectCurrencySelect);
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(false);

  const firebaseData = watchlist;

  const [isopen, setIsopen] = useState(false);

  const handleIsOpen = () => {
    setIsopen(!isopen);
  };
  const handleLogout = () => {
    signOut(auth);
    setIsopen(!isopen);
    toast.success("Successfully Logged Out", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };
  const FormatNumber = (value = 0) => {
    const absValue = Math.abs(Number(value).toFixed(2));

    const trillion = 1e12;
    const billion = 1e9;
    const million = 1e6;

    if (absValue >= trillion) {
      return `${selectedSign} ${(absValue / trillion).toFixed(2)} Trillion`;
    } else if (absValue >= billion) {
      return `${selectedSign} ${(absValue / billion).toFixed(2)} Billion`;
    } else if (absValue >= million) {
      return `${selectedSign} ${(absValue / million).toFixed(2)} Million`;
    } else {
      return `${selectedSign} ${absValue.toLocaleString("en-US")}`;
    }
  };
  const fetchData = async () => {
    const updatedArray = [];

    for (const value of firebaseData) {
      setLoading(true);
      const fetchedData = async (value) => {
        const options = {
          headers: {
            "x-access-token": import.meta.env.VITE_API_KEY,
          },
        };
        const response = await fetch(
          `https://api.coinranking.com/v2/coin/${value}?referenceCurrencyUuid=${selectedCurrency}&timePeriod=${selectedTime}`,
          options
        );
        const data = await response.json();
        return data.data.coin;
      };

      const result = await fetchedData(value);
      updatedArray.push(result);
    }

    setCoinData(updatedArray);
    console.log(coinData);
  };
  useEffect(() => {
    fetchData();
  }, [watchlist, selectedCurrency]);
  return (
    <>
      <img
        src={userData.photoURL !== null ? userData.photoURL : "userpic.jpg"}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="mt-2 px-4 flex justify-center">
                  <img
                    src={
                      userData.photoURL !== null
                        ? userData.photoURL
                        : "userpic.jpg"
                    }
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
                    {coinData.length > 0 &&
                      coinData.map((coin) => (
                        <div key={coin.name} onClick={handleIsOpen}>
                          <Link to={`/coin/${coin.uuid}`}>
                            <div className="hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-slate-900 transition-colors duration-300 flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-black">
                                {/* Make sure to use the correct property from the coin object */}
                                {coin.name}
                              </h3>
                              <span>{FormatNumber(coin.price)}</span>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="mt-4 px-4 flex justify-center">
                  <TERipple rippleColor="bg-black" className=" w-full">
                    <button
                      className=" border font-bold bg-black text-white hover:bg-white hover:text-black border-slate-900 rounded-lg  px-2 py-2 w-full shadow-slate-400 shadow-inner"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </TERipple>
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
