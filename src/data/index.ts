import { Biodata } from "../models/biodata";

const getDateDiff = (startDate: Date, endDate: Date) => {
  const differenceInMilliseconds = startDate.getTime() - endDate.getTime();
  const differenceInSeconds = differenceInMilliseconds / 1000;
  const differenceInMinutes = differenceInSeconds / 60;
  const differenceInHours = differenceInMinutes / 60;
  const differenceInDays = differenceInHours / 24;

  let differenceInYear = startDate.getFullYear() - endDate.getFullYear();
  const differenceInMonth = startDate.getMonth() - endDate.getMonth();

  if (differenceInMonth < 0) differenceInYear--;
  console.info({ differenceInYear, differenceInMonth, differenceInDays });

  return {
    differenceInDays,
    differenceInHours,
    differenceInMilliseconds,
    differenceInMinutes,
    differenceInSeconds,
    differenceInYear,
    differenceInMonth,
  };
};

const getExperience = (dateFrom: Date, dateTo: Date) => {
  var startMonth = dateFrom.getFullYear() * 12 + dateFrom.getMonth();
  var endMonth = dateTo.getFullYear() * 12 + dateTo.getMonth();
  var monthInterval = endMonth - startMonth;

  var yearsOfExperience = Math.floor(monthInterval / 12);
  var monthsOfExperience = monthInterval % 12;

  return {
    yearsOfExperience,
    monthsOfExperience,
  };
};

export const getBiodata = () => {
  const data: Biodata.Root = {
    name: "Vaisakh R Krishnan",
    email: "vaisakhr.me@gmail.com",
    tagline: "Frontend Enthusiast | Aspiring Full stack Developer",
    bio: `Hello World 👋!!! I am an enthusiastic frontend developer with more than ${
      getExperience(new Date("2015-07-15"), new Date()).yearsOfExperience
    }+ years of expertise in both web and game development. I truly love the process of creating a clean, scalable and and effective code base when I build software by following industry standards. 
    In my spare time, I enjoy creating online applications and games that are responsive. Currently I am employed as a Product Engineer at Entri app.`,
    age: getDateDiff(new Date(), new Date("1993-03-25")).differenceInYear,
    careerStartYear: 2015,
    techStacks: [
      {
        techField: "Frontend - WEB",
        knownTechs: [
          "HTML",
          "CSS",
          "Vanila Js",
          "React",
          "Typescript",
          "NextJs",
          "Tailwind",
          "Django Template",
          "Material UI",
          "Bootstrap",
        ],
      },
      {
        techField: "Frontend - MOBILE",
        knownTechs: ["Flutter", "React Native"],
      },
      {
        techField: "Backend",
        knownTechs: ["NodeJs", "ExpressJs", "MongoDB", "Firebase"],
      },
      {
        techField: "Version Controls",
        knownTechs: ["git"],
      },
    ],
    projects: [
      {
        title: "Sudoku Game",
        description:
          "A Sudoku game built with React, TypeScript, and SCSS. It have a basic UI part with challenging difficulty levels (easy, medium, hard). It developed on a thought of learning about things regarding Sudoku game and complexities.",
        shortDescription: "React | Typescript | scss",
        codeBaseLink: "https://github.com/me-vaisakhr/sudoku",
        demoUrl: "https://me-vaisakhr.github.io/sudoku/",
      },
      {
        title: "Multiplayer Chain Reaction Game",
        description:
          "The idea of creating a chain reaction game with multiplayer was straightforward. For this, I constructed the frontend using React Typescript and CSS, used ExpressJs for server connectivity, and used Socket IO for multiplayer communications.",
        shortDescription: "React | Typescript | ExpressJS | Socket.io",
        codeBaseLink: "https://github.com/me-vaisakhr/chain-reaction",
      },
      {
        title: "News Aggregator Web App",
        description:
          "A straightforward news portal that I made with Materia UI and React. The news will be listed with a search feature. It also have theme switchers as well",
        shortDescription: "React | Material UI",
        codeBaseLink:
          "https://github.com/me-vaisakhr/news-aggregator-react-app",
      },
    ],
    moreProjectsLink: "https://github.com/me-vaisakhr/",
    experiences: [
      {
        position: "Product Engineer",
        company: {
          name: "Entri app",
          link: "https://entri.app",
        },
        description:
          "Entri.app is a Kochi-brewed vernacular learning platform that aims at helping people land their dream job. \n In my role, I actively contribute to the development of responsive UI for our product by collaborating closely with various team members. I ensure that I understand the requirements provided by the product manager and deliver high-quality work within the specified timeframe. ",
        workedTechs: [
          "React",
          "webpack",
          "html5",
          "css3",
          "django template",
          "VanilaJS",
          "scss",
          "typescript",
          "Material UI",
        ],
        period: {
          startYear: 2021,
          isPresent: true,
        },
      },
      {
        position: "Associate Engineer - UI",
        company: {
          name: "Litmus7",
          link: "https://litmus7.com",
        },
        description: `Litmus7 is a company provides services in the e-commerce sector. 
        Here, I used ReactJS to design and create responsive web applications that included material designs and other React packages. 
        I design adaptable front-end architectures using well planned APIs. I had the opportunity to work as a React Native developer for Walmart while I was at Litmus7.`,
        workedTechs: [
          "React",
          "html5",
          "css",
          "scss",
          "Material UI",
          "nextjs",
          "Node.js",
          "React Native",
          "React Storefront",
          "moovweb",
        ],
        period: {
          startYear: 2019,
          endYear: 2021,
        },
      },
      {
        position: "Senior Game Programmer",
        company: {
          name: "Ruby Seven Studios",
          link: "https://www.rubyseven.com/",
        },
        description:
          "Ruby Seven Studios is casino based game development company. At R7, I created and maintained games, implemented monetization features like ads and user tracking systems, and developed test plans and milestones. I coordinate with IT professionals to ensure timely game updates and releases.",
        workedTechs: ["Action script", "Javascript", "html", "Cocos2d JS"],
        period: {
          startYear: 2016,
          endYear: 2019,
        },
      },
      {
        position: "Junior Android Programmer",
        company: {
          name: "Codmob Technologies",
        },
        description:
          "Codemob was founded with the goal of assisting regular people in turning their ideas into reality. Here, my responsibility was to work with designers and backend engineers to construct and maintain Android applications bug-free and delivered to the client on time.",
        workedTechs: ["Android"],
        period: {
          startYear: 2015,
          endYear: 2016,
        },
      },
    ],
    socials: [
      {
        id: "mail",
        name: "Mail",
        icon: "",
        link: "mailto:vaisakhr.me@gmail.com",
      },
      {
        id: "github",
        name: "Github",
        icon: "",
        link: "https://github.com/me-vaisakhr",
      },
      {
        id: "linkedin",
        name: "Linked in",
        icon: "",
        link: "https://www.linkedin.com/in/vaisakh-r-krishnan-5a22b2169/",
      },
      {
        id: "codepen",
        name: "Codepen",
        icon: "",
        link: "https://codepen.io/me-vaisakhr",
      },
    ],
    resumeUrl: "/portfolio/Vaisakh_Resume.pdf",
  };

  return data;
};
