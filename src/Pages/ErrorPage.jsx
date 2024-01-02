import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import("/404ErrorImg.gif");

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
