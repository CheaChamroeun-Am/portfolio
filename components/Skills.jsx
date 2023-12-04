"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import { SiNextdotjs, SiVuetify } from "react-icons/si";
import { BiLogoVuejs, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNuxt } from "react-icons/tb";

const SkillBar = ({ name, percentage, icon }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ width: `${percentage}%` });
        } else {
          controls.start({ width: "0%" });
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, percentage]);

  return (
    <div className="mt-10">
      <div className="flex items-center mb-2">
        <div className="flex">
          <span className="font-medium mr-5">{name}</span>
          {icon}
        </div>
        <span className="w-3/4 text-right">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-300 rounded" ref={ref}>
        <motion.div
          className="h-full bg-primary1 rounded"
          initial={{ width: "0%" }}
          animate={controls}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};


const Skills = () => {
  const skill1 = [
    {
      name: "HTML",
      percentage: 80,
      icon: <SiNextdotjs className="text-2xl" />,
    },
    {
      name: "CSS",
      percentage: 75,
      icon: <BiLogoVuejs className="text-2xl" />,
    },
    {
      name: "Vuetify",
      percentage: 45,
      icon: <BiLogoReact className="text-2xl" />,
    },
    {
      name: "Tailwind",
      percentage: 60,
      icon: <TbBrandNuxt className="text-2xl" />,
    },
    // {
    //   name: "Vuetify",
    //   percentage: 90,
    //   icon: <SiVuetify className="text-2xl" />,
    // },
    // {
    //   name: "Tailwind",
    //   percentage: 90,
    //   icon: <BiLogoTailwindCss className="text-2xl" />,
    // },
  ];

  const skill2 = [
    {
      name: "Vue Js",
      percentage: 60,
      icon: <SiNextdotjs className="text-2xl" />,
    },
    {
      name: "React Js",
      percentage: 60,
      icon: <BiLogoVuejs className="text-2xl" />,
    },
    {
      name: "Nuxt Js",
      percentage: 60,
      icon: <BiLogoReact className="text-2xl" />,
    },
    {
      name: "Next Js",
      percentage: 65,
      icon: <TbBrandNuxt className="text-2xl" />,
    },
    // {
    //   name: "Vuetify",
    //   percentage: 90,
    //   icon: <SiVuetify className="text-2xl" />,
    // },
    // {
    //   name: "Tailwind",
    //   percentage: 90,
    //   icon: <BiLogoTailwindCss className="text-2xl" />,
    // },
  ];

  

  return (
    <div id="skills">
      <div className="section">
        <p className="text-center text-primary1">Why Choose Me</p>
        <h2 className="text-primary2 text-center mt-2 text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold leading-tight">
          My Experise Area
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 items-center">
          <div className="bg-bg_variant px-5 py-5 flex flex-col justify-center">
            {skill1.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
              />
            ))}
          </div>

          <div className="bg-bg_variant px-5 py-5 flex flex-col justify-center">
            <div className="bg-bg_variant px-5 py-5 flex flex-col justify-center">
              {skill2.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
