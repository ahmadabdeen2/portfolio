import React, { useState, useEffect } from "react";
import { client } from "../sanityclient";
import ProjectListItem from "./ProjectListItem";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    const query = `*[_type == "projects"]`;
    const data = await client.fetch(query);
    setProjects(data);
    console.log(data);
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div class="flex flex-col sm:flex-row sm:px-28  justify-between py-20">
      <h2 class="flex text-center text-white h-[100px] sm:sticky top-[30px] font-monument md:text-5xl sm:text-3xl text-2xl w-full md:w-[50%]">
        {" "}
        Projects
      </h2>
      <div class=" bg-black text-white font-monument w-full md:w-[50%] ">
        <div class="flex flex-col items-center justify-center">
          {projects.map((story, index) => {
            return (
              <ProjectListItem
                key={index}
                title={story.title}
                description={story.description}
                git={story.githuburl}
                live={story.liveurl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
