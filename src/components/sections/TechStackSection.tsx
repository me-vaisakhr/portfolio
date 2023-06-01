import { FC } from "react";
import Section from "../common/Section";
import TechGroup from "../common/TechGroup";
import { Biodata } from "../../models/biodata";
import React from "react";
interface TechStackSectionProps {
  techs: Array<Biodata.TechStack>;
}
const TechStackSection: FC<TechStackSectionProps> = ({ techs }) => {
  return (
    <Section id="tech" title="Hands On Techs">
      {techs.map((tech, index) => (
        <TechGroup
          key={`tech-index-${index}`}
          title={tech.techField}
          list={tech.knownTechs}
        />
      ))}
    </Section>
  );
};

export default TechStackSection;
