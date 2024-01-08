import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4">
        <div className="flex justify-center">
          <Link to="/">
            <video loading="lazy">
              <source src="/404ErrorImg.webm" type="video/webm" />
            </video>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
