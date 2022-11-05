import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import BackGroundCircles from './BackGroundCircles';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi My Name is ${pageInfo.name}`],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-cenetr overflow-hidden">
      <BackGroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        className="rounded-full w-40 h-40 object-cover"
      />
      <div className="z-20">
        <h3 className="text-sm uppercase text-grey-500 pb-2 max-lg:pl-[9rem]">
          {pageInfo?.role}
        </h3>
        <h3 className="text-sm text-grey-500 pb-2 max-lg:pl-[9rem]">{text}</h3>
        <div className="text-sm">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#workingexperience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contactus">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
