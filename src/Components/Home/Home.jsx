import React from "react";
import { motion } from "framer-motion";
import avatarImg from "../../assets/homeImgLanding.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20">
      {/* Animated Bubble with Framer Motion */}
      <motion.div
        className="w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center shadow-lg mb-10 md:mb-0"
        animate={{
          y: [0, -20, 0], // Moves up and down in a loop
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img className="w-full h-full object-cover" src={avatarImg} alt="Kunal's Avatar" />
      </motion.div>

      {/* Text content */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          I am a third-year B.Tech student with a passion for web development. 
          I specialize in creating user-friendly websites and am currently 
          exploring Next.js and advanced back-end technologies to enhance my skills.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;
