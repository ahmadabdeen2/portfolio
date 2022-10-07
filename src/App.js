import "./index.css";
import './other.scss'
import {background } from './assets'
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Hero,
  Video,
  Story,
  Expertise,
  Skills,
  Projects,
  Footer,
} from "./components";
import { motion } from "framer-motion";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <motion.div 


          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] h-[100vh] purple__gradient__3 flex items-center justify-center overflow-hidden" 
        >

          
          <div id="wrap" className='z-[2]'>
	<div id="album">
		<div id="cover" style={{backgroundImage: `url(${background})`}} className='flex flex-col items-center'>

			<div id="print">
			</div>
		</div>
		<div id="vinyl">
			<div id="print">
			</div>
		</div>
	</div>
</div>

<div className='flex flex-col sm:hidden'>
      <h2 className='text-white font-monumentbold text-xl pt-10'> Ahmad Abdeen </h2>
      <h2 className='text-white font-poppins text-sm '> This portfolio is better viewed on desktop </h2>
</div>
        </motion.div>

      ) : (
        <div className="App  bg-black">
          <div className="px-6">
            <Navbar />
            <Hero />
          </div>
          <Video />
          <div className="px-6">
            <Story />
            <Expertise />
            <Skills />
            <Projects />
          </div>
          <Footer />
        </div>

      )}
    </>
  );
}

export default App;
