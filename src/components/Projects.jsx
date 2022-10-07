import React, {useState, useEffect} from 'react'
import {client} from '../sanityclient'
import ProjectListItem from './ProjectListItem';



const stories2 = [
    {
     title: 'Project 1',
      description:
        "Hello! My name is Ahmad Abdeen, I am a full stack engineer based in Istanbul & Riyadh.",
    },
    {
        title: 'Project 2',
      description:
        "I am a 4th year Computer Engineering Student who is passionate about building things that live on the internet. My interest in Full Stack development started back in 2016 when I decided to try editing Barcelona's, (my favorite football team), official website from the dev tools which in turn taught me a lot about HTML & CSS which then got me curious to explore the world of programming and I am so glad I did!",
    },
    {
        title: 'Project 3',
      description:
        "Fast-forward to today, and I’ve had the privilege of working with a wide range of companies and individuals as a freelancer, as well as working on my own personal projects. My main focus these days is building accessible, inclusive products and digital experiences for users all around the world and establish myself in the ever-changing world of tech.",
    },
  ];
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const getProjects = async () => {
      const query = `*[_type == "projects"]`;
      const data = await client.fetch(query);
      setProjects(data);
      console.log(data)
    };
  
    useEffect(() => {
      getProjects();
    }, []);
    return (
        <div class="flex flex-col sm:flex-row sm:px-28  justify-between py-20">
   <h2 class="flex text-center text-white h-[100px] sm:sticky top-[30px] font-monument md:text-5xl sm:text-3xl text-2xl w-full md:w-[50%]">            Projects
          </h2>
          <div class=" bg-black text-white font-monument w-full md:w-[50%] ">
            <div class="flex flex-col items-center justify-center">
              {projects.map((story, index) => {
                return (
                    <ProjectListItem key ={index} title={story.title} description={story.description} git ={story.githuburl} live = {story.liveurl} />
                );
              })}
            </div>
           
            </div>
          </div>
       
      );
}

export default Projects