import React from "react";
import Button from "../Components/Button";

const HomePage = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <div className="flex flex-col bg-white">
          <div className="grid w-full grid-cols-1 my-auto md:grid-cols-2 xl:gap-14 md:gap-5">
            <div className=" flex flex-col justify-center col-span-1 text-center lg:text-start">
              <h1 className="mb-4 text-4xl font-extrabold leading-tight lg:text-8xl">
                <span>CRYPTO TRACKER</span>
              </h1>
              <h2 className="mb-6 text-4xl font-extrabold leading-tight lg:text-6xl">
                REAL TIME.
              </h2>

              <p className="mb-6 text-xl font-semibold leading-7 lg:w-3/4 text-black">
                Track Crypto through a public api in real time. Visit the
                Dashboard and more!
              </p>
              <div className="flex flex-col items-center gap-4 lg:flex-row">
                {/* <Button
                  BtnText={"Dashborad"}
                  px={5}
                  py={2}
                  bgColor={"black"}
                  hoverbg={"white"}
                /> */}
                <Button
                  BtnText={"Dashboard"}
                  px={5}
                  py={2}
                  bgColor={"black"}
                  hoverbg={"white"}
                  onclick={"/Dashboard"}
                />
                <Button
                  BtnText={"Share App"}
                  px={5}
                  py={2}
                  bgColor={"white"}
                  hoverbg={"black"}
                />
              </div>
            </div>
            <div className="items-center justify-end hidden col-span-1 md:flex">
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
