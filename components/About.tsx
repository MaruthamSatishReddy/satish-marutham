import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ x: 0 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center"
    >
      <img
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover"
      />
      <h3 className="absolute top-20 uppercase tracking-[3px] text-gray-500 text-xl">
        About
      </h3>
      <div className="space-y-10 px-0 md:px-10 text-center max-w-6xl">
        <h4 className="text-xl">Here is Satish Marutham</h4>
        <p className="text-sm text-center">
          To be a member of an organization where growth prospects are unlimited
          and individual is recognized by his work. As a professional I am
          creative, innovative and looking ahead to work in a challenging
          environment and strive for excellence.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
