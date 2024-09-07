import HomeLinks from '@components/homeLinks';
import Link from '@components/ui/link';
import React from 'react';
import ExperienceCard from '@components/experienceCard';
import ProjectCard from '@components/projectCard';
import { Css, Git, Javascript, ReactHookForm, ReactIcon, ReactQuery, Redux, Tailwind, Typescript, Zod } from '@assets/icons';

const Home = () => {
  const skills = {
    react: 'React',
    html: 'HTML',
    css: 'CSS',
    javascript: 'Javascript',
    reactJs: 'React Js',
    tailwindCss: 'Tailwind CSS',
    reactQuery: 'React Query',
    typescript: 'Typescript',
    materialUi: 'Material UI',
    github: 'Github',
    git: 'Git',
    redux: 'Redux',
    reactHookForm: 'React Hook Form',
    zod: 'Zod',
    techSkills: [
      'HTML',
      'CSS',
      'Javascript',
      'React Js',
      'Tailwind CSS',
      'Raect Query',
      'Typescript',
      'Material UI',
      'Github',
      'Git',
      'Redux',
      'React Hook Form',
      'Zod',
    ],
  };
  const experienceData = [
    {
      startDate: '2023',
      endDate: '2024',
      header: 'Frontend Developer',
      company: 'Ere buisness solutions',
      description:
        'Designed and Developed user interface using React Js  Collaborated closely with UX designers to implement pixel-perfect designs, ensuring seamless integration of complex features. Optimized application performance through efficient state management with Redux and implemented reusable component libraries. Actively participated in Agile development processes, contributing to sprint planning and daily stand-ups to ensure timely project delivery.',
      skills: skills.techSkills,
    },
  ];

  return (
    <div className="mx-auto flex h-max max-w-[1400px] relative flex-col overflow-auto md:h-[90vh] md:flex-row md:overflow-hidden">
      <div className="flex flex-col px-5 pt-28 md:pt-32 lg:px-16 xl:px-32">
        <div className="text-left">
          <h1 className="mb-2 text-4xl font-bold text-[#ccd6f6] lg:text-5xl">Shameel K</h1>
          <h2 className="mb-4 text-xl font-medium text-[#ccd6f6] lg:text-2xl">Frontend Engineer</h2>
          <p className="max-w-[300px] text-sm text-[#8892b0] lg:text-base">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </div>
        <div className="md:mt-8 md:min-w-full">
          <HomeLinks />
        </div>
        <Skills />
      </div>
      <div className="flex-1 scroll-smooth px-5 md:snap-y md:snap-mandatory md:overflow-y-auto lg:px-16 xl:px-32">
        <div
          id="about"
          className="flex max-w-[600px] snap-start text-slate-200 md:min-h-[90vh] md:pt-32"
        >
          <div>
            <p className="rounded-md py-10 leading-relaxed tracking-normal shadow-lg shadow-[#0d1622] md:px-5">
              Hi, I’m a passionate frontend developer with over 1.5 years of experience creating
              clean, responsive, and interactive web applications. My expertise lies in building
              user-friendly interfaces with React, Next.js, and modern web technologies. I have 1
              year of industry experience, where I’ve contributed to dynamic projects, solving
              real-world problems with elegant solutions. Beyond coding, I enjoy playing games,
              tackling CSS challenges, and much more. I also love connecting with others and
              continuously learning—whether it’s mastering a new tech skill or exploring the
              evolving world of AI. I’m constantly seeking new challenges that let me blend
              creativity with problem-solving. Let’s connect and create something awesome together!
            </p>
          </div>
        </div>
        <div
          id="experience"
          className="flex max-w-[600px] snap-start flex-col gap-y-10 pt-10 text-white md:min-h-[90vh] md:pt-32"
        >
          <ExperienceCard
            startDate={experienceData[0].startDate}
            endDate={experienceData[0].endDate}
            header={experienceData[0].header}
            company={experienceData[0].company}
            description={experienceData[0].description}
            skills={experienceData[0].skills}
          />
          {/* <div>
            <ExperienceCard
              startDate={experienceData[0].startDate}
              endDate={experienceData[0].endDate}
              header={experienceData[0].header}
              company={experienceData[0].company}
              description={experienceData[0].description}
              skills={experienceData[0].skills}
            />
          </div> */}
        </div>
        <div className="mt-10 h-[1px] w-3/4 mx-auto bg-slate-400/30 md:hidden"></div>
        <div
          id="projects"
          className="flex mb-5 md:min-h-[90vh] max-w-[600px] snap-start flex-col gap-y-10 pt-10 text-white md:pt-32"
        >
          <ProjectCard
            header="Nanma Mall "
            description="Nama Mall is a modern e-commerce platform offering a seamless shopping experience."
            techs={[
              skills.react,
              skills.reactQuery,
              skills.reactHookForm,
              skills.materialUi,
              skills.zod,
              skills.css,
            ]}
          />
          <ProjectCard
            header="Zinea"
            description="A Video streaming platform  where users can enjoy seamless, high-quality video content."
            techs={[skills.react, skills.reactHookForm, skills.tailwindCss, skills.zod, skills.css]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

const Skills = () => {
  return (
    <div className="to-slate-transparent mt-8 grid grid-cols-6 gap-y-3 bg-gradient-to-t  from-black/20 via-transparent to-transparent max-w-[300px]">
      <ReactIcon />
      <Typescript />
      <Javascript />
      <Tailwind />
      <ReactQuery />
      <Redux />
      <Git />
      <Zod />
      <ReactHookForm/>
    </div>
  );
};
