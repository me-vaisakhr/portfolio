import { FC, useRef } from "react";
import LinkButton from "./LinkButton";
import useObserver from "../../hooks/useObserver";
import DynamicMouseAnimator from "./DynamicMouseAnimator";

interface ProjectCardProps {
  title: string;
  subdescription?: string;
  description?: string;
  link?: string;
  demo?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subdescription,
  description,
  link,
  demo,
}) => {
  const elementRef = useRef(null);
  const [visible] = useObserver(elementRef, { dontResetOnceVisible: true });

  return (
    <DynamicMouseAnimator
      ref={elementRef}
      className={`motion-reduce:animate-none product-card group-hover:opacity-50 ${
        visible ? "animate-slide-up opacity-100" : "blur-md"
      } mb-16 sm:mb-16 lg:mb-4 transition-all font-default lg:hover:shadow-lg lg:hover:scale-x-105`}
    >
      <article className="mt-3 md:p-10 flex flex-col gap-4 md:gap-2 border-2 border-transparent rounded-lg hover:no-scrollbar">
        <h3 className="text-3xl">{title}</h3>
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-400 motion-reduce:animate-none animate-logo">
          {subdescription}
        </span>
        <p className="text-gray-700 dark:text-gray-400 text-justify">
          {description}
        </p>
        <div className="flex flex-row gap-2 mt-4">
          <LinkButton name="Code" className="w-fit" url={link} />
          {demo && <LinkButton name="Demo" className="w-fit" url={demo} />}
        </div>
      </article>
    </DynamicMouseAnimator>
  );
};
export default ProjectCard;
