import React, { useState, useEffect } from "react";
import { client, urlFor } from "../sanityclient";

const Expertise = () => {
  const [expertises, setExpertises] = useState([]);
  const getExpertises = async () => {
    const query = `*[_type == "expertise"]`;
    const data = await client.fetch(query);
    setExpertises(data);
    console.log(data);
  };

  useEffect(() => {
    getExpertises();
  }, []);

  return (
    <section class="flex flex-col sm:flex-row sm:px-28  justify-between md:py-10 py-4">
      <h2 class="flex text-center  text-white h-[100px]  sm:sticky sm:top-[50px] font-monument md:text-5xl sm:text-3xl text-2xl w-full md:w-[50%]">
        Expertise
      </h2>
      <div class=" bg-black text-white font-monument w-full md:w-[50%] ">
        <div class="flex flex-col items-center justify-center">
          {expertises.map((link) => {
            return (
              <div className="">
                <img
                  src={urlFor(link.imageurl)}
                  alt="star"
                  className="sm:w-[40px] w-[30px] aspect-auto"
                />
                <h2 className="md:text-2xl text-lg  font-monumentbold text-left py-8">
                  {link.title}
                </h2>
                <p className="font-monument text-xs  sm:text-md md:text-lg text-left w-full pb-10">
                  {link.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
