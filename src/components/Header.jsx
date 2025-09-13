import React from "react";
import { Link } from "react-scroll";

const headerItems = [
  "intro",
  "projects",
  "certifications",
  "timeline",
  "contact",
];

function Header() {
  return (
    <header className="fixed left-0 right-0 z-50 bg-[#31363F] bg-opacity-50 py-4">
      <nav className="flex justify-center items-center">
        {headerItems.map((item, i) => {
          return (
            <a
              key={i}
              href={`#${item}`}
              className="uppercase font-semibold text-sm md:text-base text-white text-center px-1 md:px-5 py-1 ml-0 md:ml-3 mr-0 md:mr-3 rounded-md transition-all ease-linear duration-300 hover:bg-[#78A083] hover:shadow-md"
            >
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
