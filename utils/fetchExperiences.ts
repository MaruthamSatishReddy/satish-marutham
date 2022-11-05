import { Experience } from '../typings';
export const fetchexperiences = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/getExperience`
  );
  const data = await response.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};
