import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { motion } from 'framer-motion';

import { Project } from '../typings';
type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  const [text, count] = useTypewriter({
    words: [
      'CHROMA™ Harness talent',
      'Collaborative work culture',
      'Invisible HR',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-4 uppercase tracking-[3px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => {
          return (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen top-25"
              key={project?._id}
            >
              {project.title}
              <img
                key={project._id}
                src={urlFor(project?.image).url()}
                alt=""
                className="w-50 h-50"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <p className="text-sm text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
