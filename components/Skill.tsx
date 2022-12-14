import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = { skill: Skill; directionLeft?: boolean };

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1.0 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="h-10 w-10 rounded-full border-gray-500 object-cover  xl:w-10 xl:h-10 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse"
        src={urlFor(skill?.image).url()}
        alt=""
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-12 md:w-12 xl:h-10 xl:w-10 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-bold text-black opacity-100">
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
