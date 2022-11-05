import { PageInfo } from '../typings';
export const fetchPageInfo = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/getPageInfo`
  );
  const data = await response.json();
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};
