import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackGroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border [#333333] rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333]  h-[250px] w-[250px] absolute mt-52" />
      <div className="rounded-full border border-[#333333]  h-[400px] w-[400px] absolute mt-52 " />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[400px] w-[400px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}

export default BackGroundCircles;
