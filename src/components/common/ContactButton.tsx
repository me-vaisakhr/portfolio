import { FC } from "react";
import RightUpArrow from "../../icons/RightUpArrow";

interface ContactButtonProps {
  title: string;
  icon: any;
  url?: string;
  className?: string;
}

const ContactButton: FC<ContactButtonProps> = ({
  title,
  icon,
  url,
  className,
}) => {
  return (
    <a
      target="_blank"
      className={`external-link cursor-pointer flex gap-2 items-center font-default text-black dark:text-white hover:text-yellow-600 ${
        className ? className : ""
      }`}
      href={url}
    >
      {icon}
      {title}
      <RightUpArrow className="link-icon w-4 h-4" />
    </a>
  );
};

export default ContactButton;
