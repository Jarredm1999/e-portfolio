import React from "react";

function CertificationItem(logo, name) {
  return (
    <a
      href={"https://fkcodes.com"}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-[#948979] bg-[#31363F] rounded-md overflow-hidden hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
    >
      <img
        src={logo}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="justify-self-center text-lg md:text-xl font-semibold">
          {name}
        </h3>
      </div>
    </a>
  );
}

export default CertificationItem;
