import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = { experiences: Experience[] };

const WorkingExperience = ({ experiences }: Props) => {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full md:px-40 justify-evenly mx-auto items-center">
      <h4 className="absolute top-0 uppercase text-gray-500 text-2xl">
        Working Experience
      </h4>

      <div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory content-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences?.map((experience) => {
          return (
            <ExperienceCard key={experience._id} experience={experience} />
          );
        })}
      </div>
    </motion.div>
  );
};

export default WorkingExperience;
