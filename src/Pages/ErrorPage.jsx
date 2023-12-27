import React from "react";
import "/404ErrorImg.gif";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4">
        <div className="flex justify-center">
          <Link to="/">
            <img src="404ErrorImg.gif" className="" alt="404ErrorPage" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
