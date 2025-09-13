import React from "react";

function CertificationItem({ logo, name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
    >
      <img
        src={logo}
        alt="certification"
        className="h-26 md:h-38 object-cover cursor-pointer justify-self-center"
      />
      <div className="w-full p-4">
        <p className="justify-self-center text-base font-semibold">{name}</p>
      </div>
    </a>
  );
}

export default CertificationItem;
