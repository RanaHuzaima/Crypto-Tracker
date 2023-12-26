import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateItem,
  useSelectCurrencySelect,
} from "../Redux/Slices/CurrencySelectSlice";

import { updateSelectedSign } from "../Redux/Slices/CurrencySignSlice";

const CurrencySelect = () => {
  const dispatch = useDispatch();
  const { selectedCurrency } = useSelector(useSelectCurrencySelect);

  const handleCurrencySelect = (e) => {
    const selectedValue = e.target.value;
    const SelectTextContent = e.target.options[e.target.selectedIndex].text;
    dispatch(updateItem(selectedValue));
    dispatch(updateSelectedSign(SelectTextContent));
  };
  return (
    <>
      <select
        value={selectedCurrency}
        name="CurrencySelect"
        className=" text-black font-medium rounded-lg text-sm md:px-1 md:py-2 text-center border border-slate-900"
        onChange={(e) => handleCurrencySelect(e)}
      >
        <option
          value="yhjMzLPhuIDl"
          className=" text-black font-medium text-sm"
        >
          $
        </option>
        <option
          value="5k-_VTxqtCEI"
          className=" text-black font-medium text-sm"
        >
          €
        </option>
        <option
          value="HajcSnBcQmmc"
          className=" text-black font-medium text-sm"
        >
          Rs
        </option>
        <option
          value="6mUvpzCc2lFo"
          className=" text-black font-medium text-sm"
        >
          ₹
        </option>
      </select>
    </>
  );
};

export default CurrencySelect;
