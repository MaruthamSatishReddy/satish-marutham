import { PageInfo, Social } from '../typings';
export const fetchSocials = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/getSocial`
  );
  const data = await response.json();
  const socials: Social[] = data.socials;
  return socials;
};
