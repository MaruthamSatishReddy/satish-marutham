import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = { skill: Skill; directionLeft?: boolean };

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
        className="h-10 w-10 rounded-full border-gray-500 object-cover  xl:w-10 xl:h-10 filter group-hover:grayscale transition duration-300 ease-in-out"
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
