import React, { useState, useEffect } from "react";

const CoinCalculator = ({ coinData }) => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState(0);

  useEffect(() => {
    if (firstInput !== NaN && firstInput > 0) {
      const result = firstInput * (coinData.price || 0);
      setSecondInput(result.toFixed(3));
    } else {
      setSecondInput(0);
    }
  }, [firstInput]);

  const handleFirstInput = (e) => {
    if (e.target.value >= 0) setFirstInput(e.target.value);
  };

  return (
    <>
      <div className="border border-slate-900 rounded-lg p-3">
        <span className="text-2xl font-bold">Calculator</span>
        <p className="text-sm my-3">
          Use the calculator to convert real-time prices {coinData.name} (
          {coinData.symbol}).
        </p>
        <div>
          <div className="border border-slate-900 rounded-lg overflow-hidden">
            <input
              type="number"
              value={firstInput}
              onChange={(e) => handleFirstInput(e)}
              className="px-5 py-3 w-[60%] "
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
              className="px-5 py-3 w-[60%]"
            />
            <span className="border-l border-slate-900 px-5 py-3 text-lg font-bold">
              USD
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCalculator;
