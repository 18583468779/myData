import { useEffect, useRef, useState } from "react";
//倒计时
export const useCountDown = (count: number, sureUse: boolean) => {
  let [countDown, setCountDown] = useState<number>(count);
  const timer = useRef<NodeJS.Timer>();
  if (sureUse) {
    timer.current = setInterval(() => {
      countDown -= 1;
      setCountDown(countDown);
    }, 1000);
    useEffect(() => {
      return () => {
        timer.current = undefined;
      };
    }, []);
  }

  return { countDown };
};
