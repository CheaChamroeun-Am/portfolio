"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Project = () => {
  const portfolio = [
    {
      id: 1,
      title: "Am Cheachamroeun",
      type: "vuejs",
      desc: "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
      imageUrl:
        "https://cdn.dribbble.com/users/4189231/screenshots/17343305/media/202173138f9504c2eacd16e70698312c.png?compress=1&resize=400x300",
    },
    {
      id: 2,
      title: "Ros Sereyvann",
      type: "reactjs",
      desc: "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
      imageUrl: "./shuttlebus.png",
    },
    {
      id: 3,
      title: "Neav Kimpor",
      type: "mobile",
      desc: "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
      imageUrl:
        "./camboshoe.png",
    },
    {
      id: 4,
      title: "Seak Kimhour",
      type: "vuejs",
      desc: "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
      imageUrl:
        "./engineernest.png",
    },
    {
      id: 5,
      title: "Seak Kimhour",
      type: "vuejs",
      desc: "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
      imageUrl:
        "https://cdn.dribbble.com/users/2892962/screenshots/14273462/nlytical_mockup_4x.png",
    },
    {
      id: 6,
      title: "Seak Kimhour",
      type: "vuejs",
      desc: "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
      imageUrl:
        "https://cdn.dribbble.com/users/2892962/screenshots/14273462/nlytical_mockup_4x.png",
    },
  ];

  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // stagger the animation across children
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1, // animation duration
      },
    },
  };

  const filterPortfolio = (type) => {
    // Reset the animation state to 'hidden'
    if (type === "All") {
      setPortfolioList([]);
      setTimeout(() => {
        setPortfolioList(portfolioListOrg);
      }, 0);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList([]);
      setTimeout(() => {
        setPortfolioList(result);
      }, 0);
    }
  };

  return (
    <div id="projects" className="mt-40 bg-gray-200 py-20">
      <div className="section1">
        <p className="text-center text-primary1">Recently Work</p>
        <h2 className="mt-2 text-center text-2xl font-bold leading-tight text-primary2 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
          Projects
        </h2>
        <div className="mt-10 flex flex-row justify-evenly gap-2 px-4 md:px-72">
          <button
            onClick={() => filterPortfolio("All")}
            className="text-project rounded-md 
            border-2 border-primary3 p-1
            px-4 text-black focus:bg-primary3 focus:text-white
            focus:ring focus:ring-white active:bg-primary3 "
          >
            All
          </button>
          <button
            onClick={() => filterPortfolio("vuejs")}
            className="text-project rounded-md 
            border-2 border-primary3 p-1
            px-4 text-black focus:bg-primary3 focus:text-white
            focus:ring focus:ring-white active:bg-primary3 "
          >
            Vue Js / Nuxt js
          </button>
          <button
            onClick={() => filterPortfolio("reactjs")}
            className="text-project rounded-md 
            border-2 border-primary3 p-1
            px-4 text-black focus:bg-primary3 focus:text-white
            focus:ring focus:ring-white active:bg-primary3 "
          >
            React Js / Next Js
          </button>
          <button
            onClick={() => filterPortfolio("mobile")}
            className="text-project rounded-md 
            border-2 border-primary3 p-1
            px-4 text-black focus:bg-primary3 focus:text-white
            focus:ring focus:ring-white active:bg-primary3 "
          >
            Mobile App
          </button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="mt-10 grid grid-cols-1 content-center items-center gap-5 md:grid-cols-2 lg:grid-cols-3 "
        >
          {portfolioList.map((item, index) => (
            <motion.div
              variants={item}
              key={item.id}
              className="group m-2 flex flex-col rounded-lg bg-[white]
                p-2 transition-all duration-500 ease-in-out hover:scale-110"
            >
              <img
                src={item.imageUrl}
                className="h-[180px] rounded-lg object-cover"
              />
              <h1 className="project-title mt-2 text-[14px] font-bold  ">
                {item.title}
              </h1>
              <br />
              <p className="project-desc pb-3 text-[13px] text-gray-500">
                {item.desc}
              </p>
              <p className="project-desc pb-3 text-[13px] font-bold text-gray-500">
                Tech used: {item.desc}
              </p>
              {/* <div className="mt-5 flex gap-5">
                <button className="from-primary to-secondary rounded bg-primary2 px-3 py-2 text-white transition-all duration-500 hover:bg-primary1 hover:bg-blend-darken ">
                  See Live
                </button>
                <button className="rounded border border-primary2 bg-white px-3 py-2  text-primary1 transition-colors duration-500 hover:bg-primary2 hover:text-white  ">
                  Source Code
                </button>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
