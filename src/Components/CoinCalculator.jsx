import React, { useState, useEffect } from "react";
import { useSelectCurrencySign } from "../Redux/Slices/CurrencySign";
import { useSelector } from "react-redux";

const CoinCalculator = ({ coinData }) => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState(0);
  const { selectedSign } = useSelector(useSelectCurrencySign);

  useEffect(() => {
    if (firstInput > 0) {
      const result = firstInput * (coinData.price || 0);
      setSecondInput(result.toFixed(3));
    } else {
      setFirstInput("");
      setSecondInput(0);
    }
  }, [firstInput]);

  const handleFirstInput = (e) => {
    if (e.target.value >= 0) setFirstInput(Number(e.target.value));
  };

  let Currency = "";
  if (selectedSign === "$") {
    Currency = "USD";
  } else if (selectedSign === "€") {
    Currency = "EUR";
  } else if (selectedSign === "Rs") {
    Currency = "PKR";
  } else if (selectedSign === "₹") {
    Currency = "INR";
  } else {
    Currency = selectedSign;
  }

  return (
    <>
      <div className="border border-slate-900 rounded-lg p-3">
        <span className="text-2xl font-bold">Calculator</span>
        <p className="text-sm my-3">
          Use the calculator to convert real-time prices {coinData.name}{" "}
          <small>({coinData.symbol})</small>.
        </p>
        <div>
          <div className="border border-slate-900 rounded-lg overflow-hidden">
            <input
              type="number"
              value={firstInput}
              onChange={(e) => handleFirstInput(e)}
              className="px-5 py-3 w-[55%] "
            />
            <span className="border-l border-slate-900 px-5 py-3 font-bold text-lg">
              {coinData.name}
            </span>
          </div>
          <div className="border border-slate-900 rounded-lg overflow-hidden mt-3">
            <input
              type="number"
              value={secondInput}
              readOnly
              className="px-5 py-3 w-[55%]"
            />
            <span className="border-l border-slate-900 px-5 py-3 text-lg font-bold">
              {Currency}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCalculator;
