import React from 'react';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 tracking-[3px] uppercase text-gray-500 text-sm">
        {' '}
        Hover over a skill for curency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => {
          return <Skill key={skill._id} skill={skill} />;
        })}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => {
          return <Skill key={skill._id} skill={skill} directionLeft />;
        })}
      </div>
    </div>
  );
}

export default Skills;
