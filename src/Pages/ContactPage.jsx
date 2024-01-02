import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k9fd8tn",
        "template_74hfv6g",
        form.current,
        "dys7SFrmJ2i985__K"
      )
      .then(
        (result) => {
          alert("Message Sent");
          e.target.reset();
        },
        (error) => {
          alert("Message Not Sent");
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className=" max-w-screen-xl mx-auto px-3 sm:px-0">
        <div className=" flex flex-col mx-auto bg-white">
          <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
            <div className="flex flex-col justify-center col-span-1 text-center md:text-start">
              <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-5xl">
                Contact Us
              </h1>
              <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-black">
                Your go-to destination for real-time cryptocurrency tracking and
                analysis. At Crypto Tracker, we're passionate about providing a
                comprehensive and user-friendly platform for exploring the
                dynamic world of cryptocurrencies.
                <br /> <br />
                Our mission is to empower individuals with the knowledge and
                tools needed to navigate the cryptocurrency market confidently.
                We believe in making complex financial data accessible to
                everyone, whether you are a seasoned investor or just starting
                your crypto journey.
              </p>
            </div>
            <div className="items-center justify-end hidden col-span-1 md:flex">
              <img
                className="w-4/5 rounded-md bg-white "
                src="/ContactImg.webp"
                alt="hero image"
              />
            </div>
          </div>
        </div>
        <div className="sm:text-start text-center">
          <div className="flex flex-col gap-3">
            <div className="col-start-2 col-span-5">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg mb-6">
                Have questions, suggestions, or need assistance? Reach out to
                us! Our team is here to help you.
              </p>
            </div>
            <div className="col-start-2 col-end-6">
              <div className="bg-gray-100 p-4 rounded-xl my-4 shadow-md">
                <h3 className="font-bold text-2xl mb-2">Send us a Message</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="border font-bold bg-black text-white hover:bg-white hover:text-black border-slate-900 rounded-lg  px-5 py-2 shadow-slate-400 shadow-inner"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-start-6 col-end-10">
              <div className="bg-gray-100 p-4 rounded-xl my-4 shadow-md">
                <h3 className="font-bold text-2xl mb-2">Contact Information</h3>
                <p className="mb-2">
                  <span className="font-bold">Email:</span>{" "}
                  support@cryptotracker.com
                </p>
                <p className="mb-2">
                  <span className="font-bold">Phone:</span> +1 (555) 123-4567
                </p>
                <p>
                  <span className="font-bold">Address:</span> 123 Crypto Street,
                  Blockchain City
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
