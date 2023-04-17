import { animated, useTransition } from "@react-spring/web";
import * as React from "react";
import { ReactNode, useRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
// const map: Record<string, ReactNode> = {}; //这里使用map会有内存泄漏，当路由不在是welcome，WelcomeLayout组件会销毁，但是map还在js内存中
export const WelcomeLayout: React.FC = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const map = useRef<Record<string, ReactNode>>({});
  map.current[location.pathname] = outlet;
  const transitions = useTransition(location.pathname, {
    from: {
      transform:
        location.pathname === "/welcome/1"
          ? "translateX(0%)"
          : "translateX(100%)",
    },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: { duration: 1000 },
  });
  return transitions((style, pathname) => (
    <animated.div key={pathname} style={style}>
      <div style={{ textAlign: "left" }}>{map.current[pathname]}</div>
    </animated.div>
  ));
};
