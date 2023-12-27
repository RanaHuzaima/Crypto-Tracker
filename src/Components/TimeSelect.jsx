import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedTime,
  useSelectTime,
} from "../Redux/Slices/TimeSelectSlice";

const TimeSelect = () => {
  const dispatch = useDispatch();
  const { selectedTime } = useSelector(useSelectTime);

  const handleSelectedTime = (value) => {
    dispatch(updateSelectedTime(value));
  };
  return (
    <>
      <select
        value={selectedTime}
        onChange={(e) => handleSelectedTime(e.target.value)}
        name="TimeSelect"
        className=" text-black hidden md:block font-medium rounded-lg text-sm md:px-1 md:py-2 text-center border border-slate-900"
      >
        <option value="24h" className=" text-black font-medium text-sm">
          24h
        </option>
        <option value="12h" className=" text-black font-medium text-sm">
          12h
        </option>
        <option value="3h" className=" text-black font-medium text-sm">
          3h
        </option>
        <option value="1h" className=" text-black font-medium text-sm">
          1h
        </option>
      </select>
    </>
  );
};

export default TimeSelect;
