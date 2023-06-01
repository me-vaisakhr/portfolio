import { FC, useRef } from "react";
import useObserver from "../../hooks/useObserver";

interface ChipProps {
  text: string;
  color?: string;
}
const Chip: FC<ChipProps> = ({ text }) => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-cyan-500",
    "bg-rose-500",
    "bg-purple-500",
  ];
  const elementRef = useRef(null);
  const [visible] = useObserver(elementRef, { dontResetOnceVisible: true });

  return (
    <code
      ref={elementRef}
      className={`motion-reduce:animate-none mr-4 mb-4 lowercase font-default text-white font-extrabold rounded-lg px-4 py-3 align-middle inline-block ${
        colors[Math.floor(Math.random() * colors.length)]
      } ${visible ? "animate-fade-in opacity-100" : "blur-md"} shadow-xl`}
    >
      {text}
    </code>
  );
};

export default Chip;
