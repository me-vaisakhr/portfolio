import { FC } from "react";
import RightArrow from "../../icons/RightArrowIcon";
import { Biodata } from "../../models/biodata";
import IconLink from "../common/IconLink";
import ProjectCard from "../common/ProjectCard";
import Section from "../common/Section";

interface ProjectSectionProps {
  projects: Array<Biodata.Project>;
  repoLink?: string;
}
const ProjectSection: FC<ProjectSectionProps> = ({ projects, repoLink }) => {
  return (
    <Section id="projects" title="favourite projects">
      {projects.map((project, index) => (
        <ProjectCard
          key={`project-card-${index}`}
          title={project.title}
          subdescription={project.shortDescription}
          description={project.description}
          link={project.codeBaseLink}
          demo={project.demoUrl}
        />
      ))}
      <div className="flex justify-end">
        <IconLink
          title="View all projects"
          icon={<RightArrow className="w-4 h-4" />}
          url={repoLink}
        />
      </div>
    </Section>
  );
};

export default ProjectSection;
