import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl text-[#78A083] mb-1 md:mb-3 font-bold">
        Jarred Myers
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Aspiring Security Professional
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am currently a Software Engineer trying to transistion into
        Cybersecurity. With a strong foundation in programming and system
        design, I'm building on my techinical background to focus on cloud and
        security. I hold a CompTIA Security+ certification and am currently
        pursuing Microsoft Azure Fundamentals(AZ-900) to deepen my cloud
        security expertise. My goal is to apply both my engineering skills and
        security knowledge to help organizations build and protect modern
        systems.
      </p>
    </div>
  );
}

export default Intro;
