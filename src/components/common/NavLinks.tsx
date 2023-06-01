import IconLink from "./IconLink";
import RightArrow from "../../icons/RightArrowIcon";
import useMobile from "../../hooks/useMobile";
import RightUpArrow from "../../icons/RightUpArrow";
import React from "react";

const NavLinks = () => {
  const [isMobile] = useMobile();
  const NavIcon = isMobile ? RightUpArrow : RightArrow;
  return (
    <>
      <div className="visible lg:hidden">
        <IconLink
          title="home"
          openInSamePage
          icon={<NavIcon className="w-4 h-4" />}
          url="#"
        />
      </div>
      <IconLink
        title="projects"
        openInSamePage
        icon={<NavIcon className="w-4 h-4" />}
        url="#projects"
      />
      <IconLink
        title="techs"
        openInSamePage
        icon={<NavIcon className="w-4 h-4" />}
        url="#tech"
      />
      <IconLink
        title="experience"
        openInSamePage
        icon={<NavIcon className="w-4 h-4" />}
        url="#experience"
      />
    </>
  );
};

export default NavLinks;
