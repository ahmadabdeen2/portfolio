import React from "react";
import { vinylvideo } from "../assets";
const Video = () => {
  return (
    <div className=" md:block flex justify-center items-center">
      <video
        autoPlay
        autoplay="autoplay"
        muted="muted"
        playsinline="playsinline"
        loop
        defaultMuted
   
        preload="auto"
        playsInline
       muted
        className="w-[100%] bg-blend-overlay md:px-28 pb-20 aspect-auto overflow-hidden opacity-90 video-full"
      >
        <source src={vinylvideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
