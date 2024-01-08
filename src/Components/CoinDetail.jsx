import moment from "moment";
import React from "react";
import { useFormatNumber } from "../Hooks/formatNumber";
import { TERipple } from "tw-elements-react";
import { db } from "../Firebase/FirebaseApp";
import { useAuth } from "../Context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const CoinDetail = ({ coinData }) => {
  const { user, watchlist } = useAuth();
  const inWatchlist = watchlist.includes(coinData.uuid);
  const addToWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);

    try {
      await setDoc(coinRef, {
        coins: watchlist ? [...watchlist, coinData.uuid] : [coinData.uuid],
      });
      toast.success(`${coinData.name} Added to the Watchlist!`, {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };
  const removeFromWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);

    try {
      await setDoc(
        coinRef,
        {
          coins: watchlist.filter((watch) => watch !== coinData.uuid),
        },
        { merge: "true" }
      );
      toast.success(`${coinData.name} Remove from the Watchlist!`, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };
  return (
    <>
      {Object.keys(coinData).length > 0 ? (
        <div className="border border-slate-900 rounded-lg p-3 mb-5">
          <div className=" flex items-center justify-between gap-2 flex-wrap ">
            <div className=" flex items-center gap-2 flex-wrap">
              <img
                src={coinData.iconUrl}
                alt={coinData.uuid}
                className=" rounded-full w-6 h-6 md:w-16 md:h-16"
              />
              <h1 className=" md:text-2xl text-lg font-bold">
                {coinData.name}
              </h1>
              <small className=" hidden md:blocks">({coinData.symbol})</small>
              <span className=" border border-slate-900 text-xs md:text-lg rounded-md px-1">
                #{coinData.rank}
              </span>
            </div>
            <div className=" flex flex-col items-end flex-wrap ">
              <span className=" animate-pulse font-bold text-lg">
                {useFormatNumber(coinData.price)}
              </span>
              <span className="border rounded-md px-1 text-xs border-slate-900 font-semibold">
                {moment.unix(coinData.priceAt).fromNow()}
              </span>
            </div>
          </div>
          <p className=" mt-3 mb-3">{coinData.description}</p>
          <TERipple rippleColor="bg-black">
            <button
              className={`border ${
                inWatchlist ? "border-white" : "border-black"
              } font-bold ${
                inWatchlist ? "bg-red-700" : "bg-black"
              } text-white hover:bg-white hover:text-black border-slate-900 rounded-lg  px-2 py-2 shadow-slate-400 shadow-inner`}
              onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
            >
              {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            </button>
          </TERipple>
        </div>
      ) : (
        <div className="text-center mt-3 font-semibold text-xl">Loading...</div>
      )}
    </>
  );
};

export default CoinDetail;
