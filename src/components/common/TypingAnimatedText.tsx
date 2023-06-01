/* eslint-disable react-refresh/only-export-components */
import { FC, memo, useEffect, useState } from "react";
import { delay } from "../utils/delay";

interface TypingAnimatedTextProps {
  text: string;
  className?: string;
  duration: number;
}

const TypingAnimatedText: FC<TypingAnimatedTextProps> = ({
  text,
  className,
  duration,
}) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    delay(duration).then(() => {
      if (currentText.length < text.length) {
        setCurrentText(text.substring(0, currentText.length + 1));
      }
    });
  }, [currentText, text, duration]);

  return (
    <article className="text-center">
      <p
        className={`text-md text-gray-500 font-default overflow-hidden text-left leading-7 ${
          className ? className : ""
        }`}
      >
        {currentText}
        <span className="inline-block ml-1 pt-1 text-left motion-reduce:animate-none animate-blink-bg bg-black dark:bg-white w-2 h-4" />
      </p>
    </article>
  );
};

export default memo(TypingAnimatedText);
