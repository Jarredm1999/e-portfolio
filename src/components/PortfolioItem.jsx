import React from "react";

function PortfolioItem({ title, imgUrl, desc, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-[#948979] bg-[#393E46] rounded-md overflow-hidden hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="items-center text-xs mb-2 md:mb-3">{desc}</p>
        <p className="flex flex-wrap gap-2 flex-row items-centers justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 bg-[#DFD0B8] text-black rounded-lg">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
