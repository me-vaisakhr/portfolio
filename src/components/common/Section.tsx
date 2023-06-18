import { FC, PropsWithChildren, useRef } from "react";
import useObserver from "../../hooks/useObserver";
interface SectionProps {
  id?: string;
  title: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
  id,
  title,
  children,
}) => {
  const ref = useRef(null);
  const [visible] = useObserver(ref, { dontResetOnceVisible: true });
  return (
    <section
      id={id}
      className={`motion-reduce:animate-none text-black dark:text-white px-2 lg:px-8 ${
        visible ? "animate-slide-up" : ""
      }`}
    >
      <h2 className="font-logo font-bold text-2xl sticky top-0 dark:bg-mild-transparent-primary bg-mild-transparent-white z-10 w-full p-4 md:px-8 text-center lg:text-left backdrop-blur-sm shadow-black">
        {title}
      </h2>
      <div className="mt-7 p-0 px-4 md:pl-8 group">{children}</div>
    </section>
  );
};

export default Section;
