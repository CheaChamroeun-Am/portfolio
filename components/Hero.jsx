"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Hero = () => {
  const socials = [
    {
      href: "https://www.facebook.com/profile.php?id=100064521276429",
      icon: <AiFillFacebook className=" text-2xl" />,
    },
    {
      href: "https://www.instagram.com/chamroeun_0807/",
      icon: <AiFillInstagram className=" text-2xl" />,
    },
    {
      href: "https://twitter.com/ACheachamroeun",
      icon: <AiFillTwitterCircle className="text-2xl" />,
    },
    {
      href: "https://github.com/CheaChamroeun-Am",
      icon: <AiFillGithub className="text-2xl" />,
    },
    {
      href: "https://www.linkedin.com/in/am-cheachamroeun-430406234/",
      icon: <AiFillLinkedin className=" text-2xl" />,
    },
  ];

  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {};

  return (
    <div
      className="section1 flex h-[100vh] items-center justify-center "
      id="home"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
        <div className="order-last lg:order-first">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-4xl xl:text-5xl">
            Hi, I am
          </h1>
          <h1 className="mt-2 break-words text-3xl font-bold md:text-4xl lg:text-4xl xl:text-5xl">
            Am Cheachamroeun
          </h1>
          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            <Typewriter
              words={["Frontend Developer"]}
              loop={0}
              cursor
              // cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </h2>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 🤘
          </p>

          <div className="mt-5 flex flex-wrap gap-5">
            {socials.map((social) => (
              <a href={social.href} target="_blank" key={social.href}>
                {social.icon}
              </a>
            ))}
          </div>
          <div className="mt-10 flex gap-5">
            <button className="from-primary to-secondary rounded-md bg-primary2 px-5 py-2 text-white transition-all duration-500 hover:bg-primary1 hover:bg-blend-darken md:px-7 md:py-3">
              Hire Me
            </button>
            <a href="/Am-Cheachamroeun-Resume.pdf" download>
              <button className="rounded-md border border-primary1 bg-white px-5 py-2 text-primary1 transition-colors duration-500 hover:bg-primary1 hover:text-white md:px-7 md:py-3  ">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <Image
            src="/profile1.png"
            alt="hero"
            width={400}
            height={400}
            className="mx-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
