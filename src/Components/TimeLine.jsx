import React from "react";

const TimeLine = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          {/* left*/}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-[#141D20] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-white">Our Vision</h3>
              <p className="leading-tight text-justify text-white">
                At Crypto Tracker, our vision is to empower individuals with
                real-time insights into the cryptocurrency market. We strive to
                provide a user-friendly platform that makes cryptocurrency
                tracking and analysis accessible to everyone.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full  shadow"></div>
            </div>
          </div>
          {/* right*/}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#141D20] shadow"></div>
            </div>
            <div className="bg-[#141D20] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-white">
                Our Mission
              </h3>
              <p className="leading-tight text-justify text-white">
                Crypto Tracker is on a mission to provide comprehensive and
                real-time information about cryptocurrencies. We aim to empower
                users with the knowledge needed to make informed decisions in
                the ever-evolving world of digital assets.
              </p>
            </div>
          </div>
          {/* left */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-[#141D20] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-white">
                Advanced Features
              </h3>
              <p className="leading-tight text-justify text-white">
                Explore Crypto Tracker's advanced features, including
                personalized portfolio tracking, real-time market data, and
                detailed insights into each cryptocurrency. We offer a range of
                tools to enhance your crypto journey.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#141D20] shadow"></div>
            </div>
          </div>
          {/* right*/}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#141D20] shadow"></div>
            </div>
            <div className="bg-[#141D20] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1 text-white">
                User-Centric Platform
              </h3>
              <p className="leading-tight text-justify text-white">
                We are committed to providing a user-centric platform that
                caters to the needs of crypto enthusiasts. Your satisfaction and
                success in the crypto market are at the heart of everything we
                do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
