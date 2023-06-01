import { FC, useRef } from "react";
import useObserver from "../../hooks/useObserver";
import Chip from "./Chip";

interface TechGroupProps {
  title: string;
  list: Array<string>;
}

const TechGroup: FC<TechGroupProps> = ({ title, list }) => {
  const elementRef = useRef(null);
  const [visible] = useObserver(elementRef, { dontResetOnceVisible: true });
  return (
    <div
      ref={elementRef}
      className={`motion-reduce:animate-none font-default ${
        visible ? "animate-slide-up opacity-100" : "blur-md"
      }`}
    >
      <h3 className="w-fit font-light text-lg my-4 sm:my-8 break-keep lowercase border-yellow-500  border-b-4 animate-slide-up">
        {title}
      </h3>
      <div>
        {list.map((tech, index) => (
          <Chip key={`tech-stack-${index}`} text={tech}/>
        ))}
      </div>
    </div>
  );
};

export default TechGroup;
