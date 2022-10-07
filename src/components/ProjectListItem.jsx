import React, { useState } from "react";
import { projectstar, more } from "../assets";

import { motion } from "framer-motion";
import { DiGithubBadge } from "react-icons/di";
const variants = {
  open: {
    display: "block",
    opacity: 1,
    height: "auto",
    transition: {
      duration: 1.5,
      ease: [0, 0.71, 0.2, 1.01],
      staggerChildren: 0.17,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    display: "none",
    clear: "both",
    transition: {
      duration: 1.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const ProjectListItem = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="border-b-[1px] border-[#a5a5a5] w-full mb-5 mt-4 cursor-pointer"
      onClick={() => setToggle(!toggle)}
    >
      <img
        src={projectstar}
        alt="projectstar"
        className="sm:max-w-[30px] max-w-[25px] aspect-auto pb-2 md:pt-8 pt-6 w-full"
      />
      <div className="flex justify-between items-center">
        <h3
          className="font-monumentbold md:text-3xl sm:text-2xl text-xl py-3"
          onClick={() => setToggle(!toggle)}
        >
          {" "}
          {props.title}{" "}
        </h3>
        <img
          src={more}
          alt="more"
          className="sm:max-w-[30px] max-w-[25px] aspect-auto py-4 w-full"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <motion.div
        variants={variants}
        animate={toggle ? "open" : "closed"}
        className={`text-left`}
      >
        <p className="text-white text-left text-sm pt-2 pb-8">
          {props.description}
        </p>
      </motion.div>
      <div className="flex justify-start items-center py-4">
        {props.git ? (
          <a
            href={props.git}
            target="_blank"
            rel="noreferrer"
            className="flex justify-start items-center"
          >
            <DiGithubBadge className="text-white text-2xl mr-2" />
          </a>
        ) : null}
        <a
          href={props.live}
          target="_blank"
          rel="noreferrer"
          className="flex justify-start items-center"
        >
          <p className="text-white text-sm font-monument">View Project</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectListItem;
