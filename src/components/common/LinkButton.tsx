/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { FC, memo } from "react";

interface LinkButtonProps {
  name: string;
  className?: string;
  url?: string;
}

const LinkButton: FC<LinkButtonProps> = ({ name, className, url }) => {
  return (
    <a
      target="_blank"
      className={`font-default link-button text-black dark:text-white ${
        className ? className : ""
      }`}
      href={url}
    >
      {name}
    </a>
  );
};

export default memo(LinkButton);
