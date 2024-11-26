import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis, SiMongodb, SiApachekafka } from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-12">
          {/* HTML Icon */}
          <motion.span
            className="p-3 flex items-center rounded-2xl"
            style={{ color: "#E34F26", boxShadow: "0 0 10px 5px rgba(227, 79, 38, 0.7)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px 10px rgba(227, 79, 38, 1)" }} // Glowing effect on hover
            animate={{
              y: [0, -5, 0], // Moving up and down effect
              transition: {
                duration: 2, // Duration of the movement
                ease: "easeInOut",
                repeat: Infinity, // Repeat infinitely
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHtml5 size={50} />
          </motion.span>

          {/* CSS Icon */}
          <motion.span
            className="p-3 flex items-center rounded-2xl"
            style={{ color: "#1572B6", boxShadow: "0 0 10px 5px rgba(21, 114, 182, 0.7)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px 10px rgba(21, 114, 182, 1)" }} // Glowing effect on hover
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCss3 size={50} />
          </motion.span>

          {/* React Icon */}
          <motion.span
            className="p-3 flex items-center rounded-2xl"
            style={{ color: "#61DAFB", boxShadow: "0 0 10px 5px rgba(97, 218, 251, 0.7)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px 10px rgba(97, 218, 251, 1)" }} // Glowing effect on hover
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaReact size={50} />
          </motion.span>

          {/* JavaScript Icon */}
          <motion.span
            className="p-3 flex items-center rounded-2xl"
            style={{ color: "#F7DF1E", boxShadow: "0 0 10px 5px rgba(247, 223, 30, 0.7)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px 10px rgba(247, 223, 30, 1)" }} // Glowing effect on hover
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaJs size={50} />
          </motion.span>

          {/* Figma Icon */}
          <motion.span
            className="p-3 flex items-center rounded-2xl"
            style={{ color: "#F24E1E", boxShadow: "0 0 10px 5px rgb(172, 47, 194,0.7)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px 10px rgb(172, 47, 194,1)" }} // Glowing effect on hover
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFigma color="#ac2fc2" size={50} />
          </motion.span>

          {/* MongoDB Icon */}
          <motion.span
            className="p-3 flex items-center rounded-2xl"
            style={{ color: "#47A248", boxShadow: "0 0 10px 5px rgba(71, 162, 72, 0.7)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px 10px rgba(71, 162, 72, 1)" }} // Glowing effect on hover
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <SiMongodb size={50} />
          </motion.span>

          {/* Redis Icon */}
          <motion.span
            className="p-3 flex items-center rounded-2xl"
            style={{ color: "#FF4438", boxShadow: "0 0 10px 5px rgba(255, 68, 56, 0.7)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px 10px rgba(255, 68, 56, 1)" }} // Glowing effect on hover
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <SiRedis size={50} />
          </motion.span>

          {/* Apache Kafka Icon */}
          <motion.span
            className="p-3 flex items-center rounded-2xl"
            style={{ color: "#FFF", boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px 10px rgba(255, 255, 255, 1)" }} // Glowing effect on hover
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <SiApachekafka size={50} />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
