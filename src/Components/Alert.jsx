import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TEAlert } from "tw-elements-react";
import { useSelectAlert, setValues } from "../Redux/Slices/AlertSlice";

const Alert = () => {
  const { isOpen, message, type, isClose } = useSelector(useSelectAlert);
  const dispatch = useDispatch();

  useEffect(() => {}, [message, type, isOpen]);

  return (
    <>
      <TEAlert
        dismiss
        autohide
        delay={3000}
        open={isOpen}
        color={`bg-${type}-100 text-${type}-700`}
        setOpen={isClose}
      >
        <span className="flex items-center justify-center gap-2">
          {type !== "success" ? (
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/ios-filled/50/error--v1.png"
              alt="error--v1"
            />
          ) : (
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/android/24/checked.png"
              alt="checked"
            />
          )}
          {message}
        </span>
      </TEAlert>
    </>
  );
};

export default Alert;
