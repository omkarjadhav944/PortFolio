import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [Toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className="w-9 h-9 object-contain" alt="logo" />
          <p className="font-name text-white text-[18px] font-bold cursor-pointer flex">
            Omkar &nbsp;
            <span className="sm:block hidden">Jadhav</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navItem) => (
            <li
              key={navItem.id}
              className={`${
                Active === navItem.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navItem.title)}
            >
              <a href={`#${navItem.id}`}> {navItem.title}</a>
            </li>
          ))}
          <a
            href="/Omkar Jadhav 9130360347 - Resume - Front-end Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              Active === "Resume" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Resume
          </a>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={Toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!Toggle);
            }}
          />

          <div
            className={`${
              !Toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex  justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((navItem) => (
                <li
                  key={navItem.id}
                  className={`${
                    Active === navItem.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setActive(navItem.title);
                    setToggle(!Toggle);
                  }}
                >
                  <a href={`#${navItem.id}`}> {navItem.title}</a>
                </li>
              ))}
              <a
                href="/Omkar Jadhav 9130360347 - Resume - Front-end Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  Active === "Resume" ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Resume
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;