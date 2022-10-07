import React, { useState, useEffect } from "react";
import { hero, vinyl } from "../assets";
import { client } from "../sanityclient";
import { motion } from "framer-motion";

const Hero = () => {
  const [links, setLinks] = useState([]);

  const getLinks = async () => {
    const query = `*[_type == "social"]`;
    const data = await client.fetch(query);
    setLinks(data);
  };

  useEffect(() => {
    getLinks();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] bg-black overflow-hidden">
      <motion.img
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
        src={hero}
        alt="hero"
        className="hidden sm:max-w-[750px] sm:block max-w-[100%] aspect-auto z-[1] relative"
      />
      <img
        src={vinyl}
        alt="hero"
        className="sm:hidden max-w-[100%] aspect-auto z-[1] animate-spin-slow"
      />

      <div className="absolute  w-[100%] h-[50%] rounded-b-full white__gradient" />
      <div className="absolute z-[0] w-[100%] h-[35%] top-0 purple__gradient" />
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 3,
        }}
        className="absolute z-[100] w-[100%] h-[100%] top-0 purple__gradient__2"
      />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          default: {
            duration: 3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          y: {
            type: "spring",
            damping: 15,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
        className=" text-[25px] xxs:text-[30px] sm:text-[50px] md:text-[70px] lg:text-[100px] font-monumentbold text-white mt-10 z-[1]"
      >
        FULL STACK DEV
      </motion.h1>

      <div className="flex justify-between w-full px-2 xxs:px-4 sm:px-12 md:px-36 md:my-10 my-5 ">
        {links.map((link) => {
          return (
            <a href={link.url} target="_blank" rel="noreferrer">
              <h2 className="text-white md:text-xl text-xs  font-monumentbold">
                {link.title}
              </h2>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
