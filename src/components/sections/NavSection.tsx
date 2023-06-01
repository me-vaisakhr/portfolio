import { FC } from "react";
import CloseIcon from "../../icons/CloseIcon";
import NavLinks from "../common/NavLinks";

interface NavDrawerSectionProps {
  open: boolean;
  onClose?: () => void;
}

const NavDrawerSection: FC<NavDrawerSectionProps> = ({ open, onClose }) => {
  if (!open) return <></>;
  return (
    <nav
      className={`motion-reduce:animate-none animate-fade-in fixed top-0 p-8 min-h-screen w-full flex flex-col justify-center items-center gap-8 font-default font-extrabold bg-white dark:bg-black text-black opacity-90 dark:text-white backdrop-blur-3xl text-2xl z-50 transition-all ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="w-8 h-8 absolute top-4 right-4 cursor-pointer"
        onClick={onClose}
      >
        <CloseIcon />
      </div>
      <NavLinks />
    </nav>
  );
};

export default NavDrawerSection;
