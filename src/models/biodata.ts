export declare module Biodata {
  interface TechStack {
    techField: string;
    knownTechs: Array<string>;
  }
  interface Project {
    title: string;
    description: string;
    shortDescription?: string;
    codeBaseLink: string;
    demoUrl?: string;
  }
  interface Company {
    name: string;
    link?: string;
  }

  interface Period {
    startYear: number;
    endYear?: number;
    isPresent?: boolean;
  }
  interface Experience {
    position: string;
    company: Company;
    description: string;
    workedTechs: Array<string>;
    period: Period;
  }
  interface Social {
    id: string;
    name: string;
    link?: string;
    icon?: string;
  }

  interface Root {
    name: string;
    email: string;
    tagline?: string;
    bio?: string;
    age?: number;
    careerStartYear?: number;
    techStacks: Array<TechStack>;
    projects: Array<Project>;
    moreProjectsLink?: string;
    experiences: Array<Experience>;
    socials: Array<Social>;
    resumeUrl: string;
  }
}
