import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import { Experience, PageInfo, Skill, Project, Social } from '../typings';
import Hero from '../components/Hero';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import WorkingExperience from '../components/WorkingExperience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { sanityClient } from '../sanity';
import { groq } from 'next-sanity';

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
};
const Home = ({ pageInfo, socials, skills, projects, experiences }: Props) => {
  return (
    <div className="bg-stone-900 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Satish Marutham</title>
      </Head>

      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="workingexperience" className="snap-center">
        <WorkingExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section className="snap-start" id="contactus">
        <ContactUs />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfoQuery = groq`
*[_type=="pageInfo"][0]`;
  const skillsQuery = groq`
*[_type=="skill"]`;
  const projectsQuery = groq`
  *[_type=="project"]{
    ...,technologies[] ->
  }`;
  const experienceQuery = groq`
  *[_type =="experience"]{
    ...,technologies[] ->
  }`;
  const socialQuery = groq`
  *[_type=="social"]`;

  const socials: Social[] = await sanityClient.fetch(socialQuery);
  const skills: Skill[] = await sanityClient.fetch(skillsQuery);
  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  const experiences: Experience[] = await sanityClient.fetch(experienceQuery);
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);
  return {
    props: { pageInfo, socials, skills, projects, experiences },
    revalidate: 10,
  };
};
