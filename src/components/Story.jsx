import React, { useState, useEffect } from "react";
import { client, urlFor } from "../sanityclient";
import { photo1, photo2, photo3 } from "../assets";

import {motion} from 'framer-motion'


const Story = () => {
  const [stories, setStories] = useState([]);
  const getStories = async () => {
    const query = `*[_type == "story"]`;
    const data = await client.fetch(query);
    setStories(data);
  };

  useEffect(() => {
    getStories();
  }, []);

  return (
    <div class="flex flex-col sm:flex-row sm:px-28  justify-between sm:py-10 pt-4">
      <h2 class="flex text-center text-white h-[100px] sm:sticky top-[30px] font-monument md:text-5xl sm:text-3xl text-2xl w-full md:w-[50%]">
        Story
      </h2>
      <div class=" bg-black text-white font-monument w-full md:w-[50%] ">
        <div class="flex flex-col items-center justify-center">
          {stories.map((story) => {
            return (
              <motion.p
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              
              className="font-monument text-xs sm:text-md md:text-lg text-left w-full pb-10">
                {story.description}
              </motion.p>
            );
          })}
        </div>
        <div class="flex flex-col items-center justify-center pb-10 pt-2">
          <img
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={photo2}
            alt="ahmadabdeenphoto"
            className="rounded-[25px] md:h-[350px] w-full object-cover"
          />
          <div className="flex justify-between overflow-hidden w-full">
            <img
              src={photo1}
              alt="ahmadabdeenphoto"
              className="w-[45%] md:h-[200px] my-10  object-cover rounded-[25px]"
            />
            <img
              src={photo3}
              alt="ahmadabdeenphoto"
              className="w-[45%] md:h-[200px] my-10 object-cover object-top rounded-[25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
