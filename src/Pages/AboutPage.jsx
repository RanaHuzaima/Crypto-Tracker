import React from "react";
import Button from "../Components/Button";
import TimeLine from "../Components/TimeLine";
import Team from "../Components/Team";

const AboutPage = () => {
  return (
    <>
      <section className=" max-w-screen-xl mx-auto mt-4">
        <div className="container flex flex-col mx-auto bg-white">
          <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
            <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
              <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-5xl">
                About Us
              </h1>
              <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-black">
                Welcome to Crypto Tracker, your go-to destination for real-time
                cryptocurrency tracking and analysis. At Crypto Tracker, we are
                passionate about providing users with a comprehensive and
                user-friendly platform to explore the dynamic world of
                cryptocurrencies. <br /> <br />
                Our mission is to empower individuals with the knowledge and
                tools needed to navigate the cryptocurrency market confidently.
                We believe in making complex financial data accessible to
                everyone, whether you are a seasoned investor or just starting
                your crypto journey.
              </p>
              <div className="flex flex-col items-center gap-4 lg:flex-row">
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
                className="w-4/5 rounded-md"
                src="https://i.ibb.co/HYq2Dmq/About-Us.gif"
                alt="hero image"
              />
            </div>
          </div>
        </div>
        <TimeLine />
        <Team />
      </section>
    </>
  );
};

export default AboutPage;
