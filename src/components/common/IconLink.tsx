import React from "react";
import { FC } from "react";

interface IconLinkProps {
  title: string;
  icon: any;
  url?: string;
  openInSamePage?: boolean;
  onClick?: () => void;
}

const IconLink: FC<IconLinkProps> = ({
  title,
  icon,
  url,
  openInSamePage,
  onClick,
}) => {
  return (
    <a
      target={!!openInSamePage ? "_self" : "_blank"}
      className="icon-link cursor-pointer flex gap-4 items-center font-default text-black dark:text-white hover:text-yellow-600"
      href={url}
      onClick={onClick}
    >
      {title} {icon}
    </a>
  );
};

export default IconLink;
