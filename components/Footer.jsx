import React from "react";
import {
  FiFacebook,
  FiGitlab,
  FiGithub,
  FiInstagram,
  FiFigma,
  FiSend,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-primary1 p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div className="col-span-2 flex xl:justify-end justify-center">
          <div className="flex flex-col items-center text-primary1 gap-5">
            <div className="flex gap-3 items-center text-lg">
              <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
                <FiFacebook className="z-20" />
              </span>
              <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
                <FiGitlab className="z-20" />
              </span>
              <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
                <FiGithub className="z-20" />
              </span>
              <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
                <FiSend className="z-20" />
              </span>
              <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
                <FiInstagram className="z-20" />
              </span>
              <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
                <FiFigma className="z-20" />
              </span>
            </div>


            <ul className="flex flex-wrap gap-10 mt-10 text-white">
              <li>
                <a href="/#home">Home</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#skills">Skills</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>

      <div className="mt-16 flex flex-col justify-center items-center ">
        <hr className="w-[60%]" />
        <span className="text-white mt-5">&copy; 2023 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
