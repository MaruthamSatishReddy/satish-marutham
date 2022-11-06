import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[1200px] snap-center bg-[#292929] p-9 hover:opacity-100 opacity-40 md:px-10 md:h-full">
      <motion.img
        src={urlFor(experience?.companyImage).url()}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center md:top-0"
        alt="Experience"
      />
      <div className="px-10 md:px-10 md:p-10" key={experience._id}>
        <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-1xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {' '}
          {experience?.technologies.map((technology) => {
            return (
              <img
                key={technology._id}
                src={urlFor(technology?.image).url()}
                alt={technology.title}
                className="h-10 w-10 rounded-full"
              />
            );
          })}
          <p className="uppercase py-5 text-gray-400">
            {new Date(experience.dateStarted).toDateString()} -{' '}
            {experience.isCurrentlyWorkingHere
              ? 'Present'
              : new Date(experience.dateEnded).toDateString()}
          </p>
        </div>

        <ul className="list-disc space-y-2 ml-5 text-xs">
          <li key={experience._id}> {experience.points}</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
