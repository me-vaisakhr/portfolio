import { FC } from "react";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import TechStackSection from "./TechStackSection";
import { Biodata } from "../../models/biodata";
import React from "react";

interface DetailsSectionProps {
  techStacks: Array<Biodata.TechStack>;
  projects: Array<Biodata.Project>;
  moreProjectLinks?: string;
  experiences: Array<Biodata.Experience>;
  resumeUrl?: string;
}
const DetailsSection: FC<DetailsSectionProps> = ({
  techStacks,
  projects,
  moreProjectLinks,
  experiences,
  resumeUrl,
}) => {
  return (
    <section className=" lg:absolute max-w-full lg:max-w-2xl lg:right-0 flex flex-col gap-16 pb-16">
      <ProjectSection projects={projects} repoLink={moreProjectLinks} />
      <TechStackSection techs={techStacks} />
      <ExperienceSection experiences={experiences} resumeUrl={resumeUrl}/>
    </section>
  );
};

export default DetailsSection;
