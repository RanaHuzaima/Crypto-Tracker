import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedTime, useSelectTime } from "../Redux/Slices/TimeSelect";

const TimeSelect = () => {
  const dispatch = useDispatch();
  const { SelectedTime } = useSelector(useSelectTime);
  console.log(SelectedTime);

  const handleSelectedTime = (value) => {
    dispatch(updateSelectedTime(value));
  };
  return (
    <>
      <select
        value={SelectedTime}
        onChange={(e) => handleSelectedTime(e.target.value)}
        name="TimeSelect"
        className=" text-black font-medium rounded-lg text-sm px-1 py-2 text-center border border-slate-900"
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
