import { animated, useTransition } from "@react-spring/web";
import * as React from "react";
import { ReactNode } from "react";
import { useLocation, useOutlet } from "react-router-dom";
const map: Record<string, ReactNode> = {};
export const WelcomeLayout: React.FC = () => {
  const location = useLocation();
  const outlet = useOutlet();
  map[location.pathname] = outlet;
  console.log(map, "123");

  const transitions = useTransition(location.pathname, {
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: { duration: 10000 },
  });
  return transitions((style, pathname) => {
    return (
      <animated.div key={pathname} style={style}>
        <div style={{ textAlign: "left" }}>{map[pathname]}</div>
      </animated.div>
    );
  });
};
