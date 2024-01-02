import React, { useEffect } from "react";
import Button from "../Components/Button";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <div className="flex flex-col bg-white">
          <div className="grid grid-rows-1 text-center md:text-start w-full my-auto md:grid-cols-2 xl:gap-14 md:gap-5">
            <div className=" flex flex-col md:justify-center col-span-1 lg:text-start md:mt-0 px-4">
              <h1 className="md:mb-4 text-4xl font-extrabold leading-tight md:text-8xl">
                <span>CRYPTO TRACKER</span>
              </h1>
              <h2 className="mb-4 md:mb-6 text-4xl font-extrabold leading-tight md:text-6xl ">
                REAL TIME.
              </h2>

              <p className="mb-4 md:mb-6 text-xl font-semibold leading-7 lg:w-3/4 text-black">
                Track Crypto through a public api in real time. Visit the
                Dashboard and more!
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 lg:flex-row">
                <Button
                  BtnText={"Dashboard"}
                  px={5}
                  py={2}
                  bgColor={"black"}
                  hoverbg={"white"}
                  onclick={"/Dashboard"}
                />
                <button className=" px-5 py-2 bg-white text-black hover:bg-black hover:text-white shadow-inner border border-slate-900 rounded-lg shadow-slate-400 font-bold">
                  <a
                    href="https://github.com/RanaHuzaima/Crypto-Tracker"
                    target="_blank"
                  >
                    GitHub Link
                  </a>
                </button>
              </div>
            </div>
            <div className="items-center md:justify-end col-span-1 flex order-first md:order-last ">
              <img
                className="w-full rounded-md"
                src="/HomePage.gif"
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
