import React, { useState } from "react";
import { Carousel } from "../components";
import { motion } from "framer-motion";
import { logo } from "../assets";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { client } from "../sanityclient";

const links2 = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ahmadabdeennn/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ahmad-abdeen-73a852156/",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/ahmadabdeen2",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/realabdin",
  },
  {
    icon: <AiOutlineMail />,
    link: "mailto:ahmadabdin3@hotmail.com?subject=Hello My Name is",
  },
];
const Footer = () => {
  const [email, setEmail] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    const contact = {
      _type: "contact",
      email: email,
    };

    client
      .create(contact)
      .then(() => {
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-primary md:min-h-[100vh] sm:min-h-[70vh] min-h-[60vh] w-full px-6 xs:px-0 overflow-hidden flex flex-col justify-between ">
      <div className="pt-6">
        <Carousel
          items={[
            "Full Stack Developer",
            "Ahmad Abdeen",
            "Django",
            "ReactJS",
            "Amazon Web Services",
            "HTML",
            "Cascading Style Sheets",
            "Python",
            "Cpanel",
          ]}
        />
        <Carousel
          items={[
            "Frontend Development",
            "Backend Development",
            "Figma",
            "UI/UX Design",
            "Framer Motion",
            "Wix Development",
            "Search Engine Optimization",
          ]}
        />
      </div>
      <div className="flex text-left items-center justify-center">
        <div className="flex flex-col items-center">
          <motion.h2
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="md:text-7xl lg:text-8xl sm:text-6xl xxs:text-2xl text-lg   font-monumentbold text-white sm:pb-10 pb-2 text-left"
          >
            LET'S GET TO ---- <br />
            KNOW EACHOTHER
          </motion.h2>
          <div className='flex flex-col items-end w-full'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-transparent border-b-[1px]  rounded-none border-white text-white text-sm font-monument w-full  md:placeholder:text-sm placeholder:text-[6px] placeholder:text-[#a5a5a5] placeholder:font-monument"
            placeholder="Enter your email address here"
          />
          <button
            onClick={handleSubmit}
            className="bg-white text-primary sm:text-2xl text-xs font-monumentbold sm:w-[200px] w-[100px] "
          >
            Send
          </button>
          </div>
          {isFormSubmitted && (
            <p className="text-white text-sm font-monument">
              Thank you for your submission
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between sm:px-12 xs:px-10 mb-4 mt-10 ">
        <img
          src={logo}
          alt="logo"
          className="sm:w-[100px] w-[45px] aspect-auto"
        />

        <div className="flex items-center">
          {links2.map((link) => {
            return (
              <div className="px-2 sm:text-2xl text-sm  text-white">
                <a href={link.link} target="_blank" rel="noreferrer">
                  {link.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
