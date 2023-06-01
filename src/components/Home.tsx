import { useState } from "react";
import HamIcon from "../icons/HamburgerIcon";
import DetailsSection from "./sections/DetailSection";
import NavDrawerSection from "./sections/NavSection";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import { getBiodata } from "../data";

const SimplifiedPortfolio = () => {
  const [openNav, setNavStatus] = useState(false);

  const data = getBiodata();

  const handleNavIconClick = () => {
    setNavStatus(true);
  };
  return (
    <section className="w-full h-screen relative">
      <header
        className="lg:hidden w-auto outline-none fixed right-4 top-4 flex justify-end z-50 cursor-pointer"
        onClick={handleNavIconClick}
      >
        <HamIcon className="w-8 h-8 p-1 motion-reduce:animate-none animate-fade-in" />
      </header>
      <div className="grid lg:gap-32 relative grid-cols-1 lg:grid-cols-2 overflow-visible">
        <PersonalInfoSection
          name={data.name}
          bio={data.bio}
          tagline={data.tagline}
          connects={data.socials}
        />
        <DetailsSection
          techStacks={data.techStacks}
          projects={data.projects}
          moreProjectLinks={data.moreProjectsLink}
          experiences={data.experiences}
          resumeUrl={data.resumeUrl}
        />
      </div>
      <NavDrawerSection open={openNav} onClose={() => setNavStatus(false)} />
    </section>
  );
};

export default SimplifiedPortfolio;
