import {
  FC,
  HTMLProps,
  MouseEvent,
  PropsWithChildren,
  RefObject,
  forwardRef,
  useState,
} from "react";
import useMobile from "../../hooks/useMobile";
import React from "react";

interface DynamicMouseAnimatorProps
  extends Omit<HTMLProps<HTMLDivElement>, "ref"> {
  elementRef: RefObject<HTMLDivElement>;
}

const DynamicMouseAnimator: FC<PropsWithChildren<DynamicMouseAnimatorProps>> =
  forwardRef((props, ref) => {
    console.info({ ref });
    const { elementRef, children, ...rest } = props;
    const [animateObjects, setAnimation] = useState<{
      rotateX: number;
      rotateY: number;
    }>({
      rotateX: 0,
      rotateY: 0,
    });

    const [isMobile] = useMobile();

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();

      const width = rect.left + rect.width;
      const height = rect.top + rect.height;
      const left = event.clientX;
      const top = event.clientY;

      const px = Math.abs(Math.floor((100 / width) * left) - 50);
      const py = Math.abs(Math.floor((100 / height) * top) - 60);

      const lp = 50 + (px - 50) / 1.5;
      const tp = 50 + (py - 50) / 1.5;

      const rotateX = ((tp - 50) / 2) * -1;
      const rotateY = ((lp - 50) / 1.5) * 0.5;

      setAnimation({
        rotateX,
        rotateY,
      });
    };

    const handleMouseLeave = () => {
      setAnimation({
        rotateX: 0,
        rotateY: 0,
      });
    };

    return (
      <div
        ref={elementRef}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          transform: `rotateX(${animateObjects.rotateX}deg) rotateY(${animateObjects.rotateY}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {children}
      </div>
    );
  });

export default DynamicMouseAnimator;
