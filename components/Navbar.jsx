"use client";

import { useState, useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const [shouldSpin, setShouldSpin] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNav = () => {
    setToggle(!toggle);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, [active]);

  useEffect(() => {
    if (shouldSpin) {
      const timer = setTimeout(() => {
        setShouldSpin(false);
      }, 100); // 500ms is the duration of the spin

      return () => clearTimeout(timer);
    }
  }, [shouldSpin]);

  return (
    <div
      className={`${active ? "bg-primary1 shadow-lg" : ""} sticky top-0 z-20`}
    >
      <div
        className={`${
          active ? "py-4 transition-all duration-300" : "py-4"
        } flex min-h-[50px] w-full items-center justify-between bg-primary1 px-3 text-white`}
      >
        <div className="px-10 text-xl font-bold tracking-wide">
          <h1>Am Cheachamroeun</h1>
        </div>

        <div className="mr-2 flex items-center gap-5">
          <ul className="hidden items-center gap-10 px-4 transition-all duration-500 lg:flex ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer transition-all duration-500 hover:text-primary2"
            >
              Home
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={300}
              offset={-100}
              className="cursor-pointer transition-all duration-500 hover:text-primary2"
            >
              About
            </Link>

            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer transition-all duration-500 hover:text-primary2"
            >
              Skills
            </Link>

            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer transition-all duration-500 hover:text-primary2"
            >
              Projects
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer transition-all duration-500 hover:text-primary2"
            >
              Contact
            </Link>

            <button
              className="relative h-8 w-14 rounded-full bg-gray-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {/* Slider Background */}
              <div
                className={`absolute bottom-1 left-1 right-1 top-1 rounded-full transition-all duration-300 ease-in-out ${
                  theme === "dark" ? "bg-gray-300" : "bg-gray-300"
                }`}
              />

              {/* Icons */}
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
                  theme === "dark"
                    ? "translate-x-full bg-gray-400"
                    : "translate-x-0 bg-gray-400"
                }`}
              >
                {theme === "dark" ? (
                  <FaSun size={16} className="text-yellow-500" />
                ) : (
                  <FaMoon size={16} className="text-gray-800" />
                )}
              </div>
            </button>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={() => {
              setToggle(!toggle);
              if (!toggle) {
                setShouldSpin(true);
              }
            }}
            className="z-50 lg:hidden"
          >
            {toggle ? (
              <AiOutlineClose
                size={25}
                className="mr-4 cursor-pointer"
                style={{
                  transition: "transform 0.5s ease",
                  transform: shouldSpin ? "rotate(360deg)" : "rotate(0deg)",
                }}
              />
            ) : (
              <FaBars size={25} className="mr-4 cursor-pointer" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          onClick={(event) => {
            handleNav;
          }}
          className={
            toggle
              ? "fixed left-0 top-0 z-40 h-full w-full overflow-y-scroll bg-black/90 transition-all duration-300"
              : "fixed left-full top-0 z-40 h-full w-full bg-black/90 transition-all duration-300"
          }
        >
          <ul className="flex h-full w-full flex-col items-center justify-center pt-12 text-center text-white">
            <Link
              onClick={handleNav}
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer py-8 transition-all duration-500 hover:text-primary2"
            >
              Home
            </Link>
            <Link
              onClick={handleNav}
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer py-8 transition-all duration-500 hover:text-primary2"
            >
              About
            </Link>
            <Link
              onClick={handleNav}
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer py-8 transition-all duration-500 hover:text-primary2"
            >
              Skills
            </Link>
            <Link
              onClick={handleNav}
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer py-8 transition-all duration-500 hover:text-primary2"
            >
              Projects
            </Link>
            <Link
              onClick={handleNav}
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className="cursor-pointer py-8 transition-all duration-500 hover:text-primary2"
            >
              Contact
            </Link>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
