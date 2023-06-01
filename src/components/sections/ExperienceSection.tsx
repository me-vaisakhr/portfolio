import ExperienceCard from "../common/ExperienceCard";
import Section from "../common/Section";
import RightArrow from "../../icons/RightArrowIcon";
import IconLink from "../common/IconLink";
import { Biodata } from "../../models/biodata";
import { FC } from "react";

interface ExperienceSectionProps {
  experiences: Array<Biodata.Experience>;
  resumeUrl?: string;
}

const ExperienceSection: FC<ExperienceSectionProps> = ({
  experiences,
  resumeUrl,
}) => {
  return (
    <Section id="experience" title="Experience">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={`expericene-${index}`}
          company={experience.company}
          experiencePeriod={experience.period}
          position={experience.position}
          description={experience.description}
          techStack={experience.workedTechs}
        />
      ))}
      <IconLink
        title="View Resume"
        icon={<RightArrow className="w-4 h-4" />}
        url={resumeUrl}
      />
    </Section>
  );
};

export default ExperienceSection;
