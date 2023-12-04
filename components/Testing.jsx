"use client";

import { Image } from "next/image";

import React, { useState } from "react";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Testing = () => {
  const [selectedCountry, setSelectedCountry] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="section mb-[500px]">
      

      <div className="relative">
        <div>
          <button
            onClick={toggleDropdown}
            className="flex w-48 items-center justify-between rounded bg-gray-300 px-4 py-2 text-gray-700 transition duration-500 ease-in-out"
          >
            {selectedCountry === "English" && (
              <>
                <img
                  src="https://www.countryflagicons.com/SHINY/24/GB.png"
                  className="mr-2 inline"
                />{" "}
                English
              </>
            )}
            {selectedCountry === "Cambodia" && (
              <>
                <img
                  src="https://www.countryflagicons.com/SHINY/24/KH.png"
                  className="mr-2 inline"
                />{" "}
                Cambodia
              </>
            )}
            {selectedCountry === "Japan" && (
              <>
                <img
                  src="https://www.countryflagicons.com/SHINY/24/JP.png"
                  className="mr-2 inline"
                />{" "}
                Japan
              </>
            )}

            {/* <IoMdArrowDropdown className="ml-2 inline" /> */}
            {isOpen ? (
              <IoMdArrowDropup className="ml-2 inline transition duration-500 ease-in-out" />
            ) : (
              <IoMdArrowDropdown className="ml-2 inline transition duration-500 " />
            )}
          </button>
        </div>

        {isOpen ? (
          <div className="absolute w-48 rounded-md bg-white opacity-100 shadow-lg transition-opacity duration-300 ease-in-out">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                onClick={() => selectCountry("English")}
                className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <img
                  src="https://www.countryflagicons.com/SHINY/24/GB.png"
                  alt="English flag"
                  className="mr-2"
                />
                English
              </button>
              <button
                onClick={() => selectCountry("Cambodia")}
                className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <img
                  src="https://www.countryflagicons.com/SHINY/24/KH.png"
                  alt="English flag"
                  className="mr-2"
                />
                Cambodia
              </button>
              <button
                onClick={() => selectCountry("Japan")}
                className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <img
                  src="https://www.countryflagicons.com/SHINY/24/JP.png"
                  alt="English flag"
                  className="mr-2"
                />
                Japan
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute w-48 rounded-md bg-white opacity-0 shadow-lg transition-opacity duration-300 ease-in-out">
            {/* This condition purpose just for transaction */}
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                onClick={() => selectCountry("English")}
                className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <img
                  src="https://www.countryflagicons.com/SHINY/24/GB.png"
                  alt="English flag"
                  className="mr-2"
                />
                English
              </button>
              <button
                onClick={() => selectCountry("Cambodia")}
                className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <img
                  src="https://www.countryflagicons.com/SHINY/24/KH.png"
                  alt="English flag"
                  className="mr-2"
                />
                Cambodia
              </button>
              <button
                onClick={() => selectCountry("Japan")}
                className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <img
                  src="https://www.countryflagicons.com/SHINY/24/JP.png"
                  alt="English flag"
                  className="mr-2"
                />
                Japan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testing;
