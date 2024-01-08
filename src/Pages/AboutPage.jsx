import React, { useEffect, lazy, Suspense } from "react";

const TimeLine = lazy(() => import("../Components/TimeLine"));
const Team = lazy(() => import("../Components/Team"));

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="max-w-screen-xl mx-auto px-3 sm:px-0">
          <div className="flex flex-col mx-auto bg-white">
            <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
              <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
                <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-5xl">
                  About Us
                </h1>
                <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-black">
                  Welcome to Crypto Tracker, your go-to destination for
                  real-time cryptocurrency tracking and analysis. At Crypto
                  Tracker, we are passionate about providing users with a
                  comprehensive and user-friendly platform to explore the
                  dynamic world of cryptocurrencies. <br /> <br />
                  Our mission is to empower individuals with the knowledge and
                  tools needed to navigate the cryptocurrency market
                  confidently. We believe in making complex financial data
                  accessible to everyone, whether you are a seasoned investor or
                  just starting your crypto journey.
                </p>
              </div>
              <div className="items-center justify-end hidden col-span-1 md:flex">
                <img
                  className="w-4/5 rounded-md bg-white "
                  src="/AboutImg.webp"
                  alt="hero image"
                />
              </div>
            </div>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <TimeLine />
            <Team />
          </Suspense>
        </section>
      </Suspense>
    </>
  );
};

export default AboutPage;
