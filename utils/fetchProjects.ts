import { Project } from '../typings';
export const fetchProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/getProjects`
  );
  const data = await response.json();
  const projects: Project[] = data.projects;
  return projects;
};
