import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/bgdjvnxa"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            a
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>
          {/* Code to add gradiant to button: bg-gradient-to-r from-white to-[#78A083] */}
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base text-black font-medium rounded-md cursor-pointer hover:drop-shadow-black transition-all duration-300 bg-[#78A083]
             drop-shadow-md"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
