import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings';
type Props = { socials: Social[] };

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-3 flex items-start justify-between max-w-6xl max-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center animate-bounce"
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="grey"
              bgColor="transparent"
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon network="email" fgColor="grey" bgColor="transparent" />
        <h1 className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </h1>
      </motion.div>
    </header>
  );
}

export default Header;
