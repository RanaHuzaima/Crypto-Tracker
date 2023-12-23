import { useSelector } from "react-redux";
import { useSelectCurrencySign } from "../Redux/Slices/CurrencySign";

export const useFormatNumber = (value = 0) => {
  const { selectedSign } = useSelector(useSelectCurrencySign);
  const absValue = Math.abs(Number(value).toFixed(2)); // Convert value to a number

  const trillion = 1e12;
  const billion = 1e9;
  const million = 1e6;

  if (absValue >= trillion) {
    return `${selectedSign} ${(absValue / trillion).toFixed(2)} Trillion`;
  } else if (absValue >= billion) {
    return `${selectedSign} ${(absValue / billion).toFixed(2)} Billion`;
  } else if (absValue >= million) {
    return `${selectedSign}0${(absValue / million).toFixed(2)} Million`;
  } else {
    return `${selectedSign}${absValue.toLocaleString("en-US")}`;
  }
};
