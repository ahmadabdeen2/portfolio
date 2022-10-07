import React from "react";
import { motion } from "framer-motion";
import { Skillset } from "./skillset.js";
const Skills = () => {
  return (
    <section class="flex flex-col sm:flex-row sm:px-28 justify-between py-10">
     <h2 class="flex text-center text-white h-[100px] sm:sticky top-[30px] font-monument md:text-5xl sm:text-3xl text-2xl w-full md:w-[50%]">
        Skills
      </h2>
      <div class=" bg-black text-white font-monument w-full md:w-[50%] ">
        <div class="grid grid-cols-4 w-full ">
          {Skillset.map((link) => {
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="md:text-6xl text-5xl  py-3  items-center flex "
              >
                {link.icon}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
