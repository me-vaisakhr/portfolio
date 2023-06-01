import { FC, useRef } from "react";
import Chip from "./Chip";
import useObserver from "../../hooks/useObserver";
import RightUpArrow from "../../icons/RightUpArrow";
import React from "react";

interface Company {
  name: string;
  link?: string;
}

interface ExperiencePeriod {
  startYear: number;
  isPresent?: boolean;
  endYear?: number;
}

interface ExperienceCardProps {
  position: string;
  company: Company;
  description?: string;
  techStack?: Array<string>;
  experiencePeriod: ExperiencePeriod;
}
const ExperienceCard: FC<ExperienceCardProps> = ({
  position,
  company,
  description,
  techStack,
  experiencePeriod,
}) => {
  const ref = useRef(null);
  const [visible] = useObserver(ref, { dontResetOnceVisible: true });
  const { startYear, endYear, isPresent } = experiencePeriod;
  return (
    <section
      ref={ref}
      className={`motion-reduce:animate-none grid grid-flow-row lg:grid-flow-col gap-4 md:gap-16 mb-16 font-default transition-transform ${
        visible ? "animate-slide-up" : "blur-md"
      }`}
    >
      <span>{`${startYear} — ${isPresent ? "Present" : endYear}`}</span>
      <div className="flex flex-col gap-4 justify-center items-start">
        <a
          target="_blank"
          className="external-link no-underline flex items-center gap-2 text-xl hover:text-red-300"
          href={company.link}
        >
          <h2>
            {`${position} @ `}
            <span>{company.name}</span>
          </h2>
          <RightUpArrow className="link-icon w-4 h-4" />
        </a>
        <p className="text-justify">{description}</p>
        <div>
          {techStack?.map((tech, index) => (
            <Chip key={`experience-tech-stack-${index}`} text={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;
