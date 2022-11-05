import { Skill } from '../typings';
export const fetchSkills = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/getSkills`
  );
  const data = await response.json();
  const skills: Skill[] = data.skills;
  return skills;
};
