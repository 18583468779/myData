import { RefObject, useEffect, useRef, useState } from "react";

export const useSwipe = (elementRef: RefObject<HTMLElement>) => {
  const [direction, setDirection] = useState<"" | "left" | "right">("");
  const userTouchX = useRef(0);

  const TouchStart = (e: TouchEvent) => {
    userTouchX.current = Math.floor(e.touches[0].clientX);
  };

  const TouchMove = (e: TouchEvent) => {
    const touch = Math.floor(e.touches[0].clientX);
    if (userTouchX.current > touch) {
      //向右滑动
      setDirection("right");
    } else if (userTouchX.current < touch) {
      //向左滑动
      setDirection("left");
    }
  };

  const TouchEnd = (e: TouchEvent) => {
    // console.log(e, "TouchEnd");
    userTouchX.current = 0;
    setDirection("");
  };

  useEffect(() => {
    if (!elementRef.current) return;
    elementRef.current.addEventListener("touchstart", TouchStart);
    elementRef.current.addEventListener("touchmove", TouchMove);
    elementRef.current.addEventListener("touchend", TouchEnd);
    return () => {
      if (!elementRef.current) return;
      elementRef.current.removeEventListener("touchstart", TouchStart);
      elementRef.current.removeEventListener("touchmove", TouchMove);
      elementRef.current.removeEventListener("touchend", TouchEnd);
    };
  }, []);

  return { direction };
};
