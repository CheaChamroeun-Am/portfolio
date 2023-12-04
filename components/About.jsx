"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex list-disc gap-10 pl-2">
        <div>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vuetify</li>
        </div>
        <div>
          <li>Tailwind</li>
          <li>Vue Js</li>
          <li>React Js</li>
        </div>
        <div>
          <li>Nuxt Js</li>
          <li>Next Js</li>
        </div>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Tux Global Institute</li>
        <li>Kirirom Institute of Technology</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Top 7 Cscup 2023</li>
        <li>Participate as a IT Support in Seagame 32nd</li>
      </ul>
    ),
  },
];

const About = () => {
  const cards = [
    {
      icon: <FaAward className="text-primary text-[30px]" />,
      title: "Experience",
      content: "3+ Years Working",
    },
    {
      icon: <FiUsers className="text-primary text-[30px]" />,
      title: "Clients",
      content: "3+ Years Working",
    },
    {
      icon: <VscFolderLibrary className="text-primary text-[30px]" />,
      title: "Projects",
      content: "3+ Years Working",
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className=" bg-gray-200 py-20" id="about">
      <div className="section1">
        <div className="grid-col-1 grid gap-5 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/about-image1.png"
              alt="hero"
              width={500}
              height={500}
              className="mx-auto h-full w-[90%] lg:h-[600px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]"
            />

            <div className="absolute bottom-0 right-[70px] translate-x-[50%] translate-y-[50%] transform md:bottom-[50px] md:right-[95px] lg:right-[110px]">
              <div className="relative flex items-center justify-center">
                <div className="absolute h-[120px] w-[120px] rounded-full bg-white md:h-[160px] md:w-[160px]"></div>

                <Image
                  src="/text-curved.png"
                  alt="front-end web developer"
                  width={180}
                  height={180}
                  className="slow-spin bg-cover] h-full max-h-[120px] w-full 
                  max-w-[120px] md:max-h-[180px] md:max-w-[180px]"
                />

                <Image
                  src="/developer-emoji.png"
                  alt="front-end web developer"
                  width={50}
                  height={50}
                  className="absolute h-full  max-h-[40px] w-full max-w-[40px] bg-cover md:left-[62px] md:top-[60px] md:max-h-[50px] md:max-w-[50px]"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary1">My intro</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-primary2 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
              About Me
            </h2>

            <div className="mt-8 flex gap-2 md:gap-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="card-title mx-auto flex h-auto cursor-default flex-col items-center justify-center
                  rounded-xl border bg-white px-5 py-5 shadow-md md:w-48 lg:w-full xl:w-48"
                >
                  {card.icon}
                  <h5 className="card-icon mt-4 text-center text-[0.95rem] font-medium">
                    {card.title}
                  </h5>
                  <p className="card-text text-light mt-4 text-center text-[0.7rem] text-sm">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8">
              I'm Chamroeun. Currently I am a third-year student majoring in
              software engineering at Kirirom Institute of Technology. I'm
              seeking an internship that will allow me to develop and push
              myself in a working environment, particularly to obtain new
              experience. I enjoy challenging myself and being innovative
            </p>
            <div className="mt-8 flex flex-row justify-start">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experiences")}
                active={tab === "experiences"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
