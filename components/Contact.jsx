import React from "react";
import { LuSend } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const cards = [
    {
      icon: <AiOutlineMail className="text-[30px] text-primary" />,
      title: "Email",
      content: "amcheachamroeun20@kit.edu.kh",
    },
    {
      icon: <BsMessenger className="text-[30px] text-primary" />,
      title: "Messenger",
      content: "Cham Roeun",
    },
    {
      icon: <BsWhatsapp className="text-[30px] text-primary" />,
      title: "WhatsApp",
      content: "+855 78220698",
    },
  ];

  return (
    <div id="contact" className="pb-20">
      <div className="section">
        <p className="text-center text-primary1">Get in touch</p>
        <h2 className="text-primary2 text-center mt-2 text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold leading-tight">
          Contact
        </h2>

        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-20 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
          <div className="flex flex-col items-center gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="contact-icon md:w-full lg:w-[300px] w-[350px] bg-white  cursor-pointer flex flex-col items-center justify-center  border h-auto py-4 px-5 rounded-xl"
              >
                {card.icon}
                <h5 className="contact-title font-medium mt-2 text-[0.95rem]">
                  {card.title}
                </h5>
                <p className="text-sm mt-3 text-[0.7rem] text-gray-400">
                  {card.content}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Email"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Subject"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={8}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your message"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <button className="text-white flex gap-5 items-center rounded-md py-2 px-5 md:py-3 md:px-7 bg-primary2 hover:bg-primary1 transition-all duration-500 from-primary to-secondary hover:bg-blend-darken">
                Download CV
                <span className="text-xl">
                  <LuSend />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
