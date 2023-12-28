import React from "react";
import { Link } from "react-router-dom";
import { TERipple } from "tw-elements-react";

const Button = ({ BtnText, px, py, bgColor, hoverbg, onclick }) => {
  return (
    <>
      <TERipple rippleColor={`${bgColor}`}>
        <Link to={`${onclick}`}>
          <button
            type="button"
            className={`border font-bold bg-${bgColor} ${
              bgColor === "black" ? "text-white" : "text-black"
            } border-slate-900 rounded-lg ${
              hoverbg === "black" ? "hover:text-white" : "hover:text-black"
            } px-${px} py-${py} ${
              hoverbg === "black" ? " hover:bg-black" : " hover:bg-white"
            } shadow-slate-400 shadow-inner`}
          >
            {BtnText}
          </button>
        </Link>
      </TERipple>
    </>
  );
};

export default Button;
