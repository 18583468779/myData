import { animated, useTransition } from "@react-spring/web";
import * as React from "react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useOutlet } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useSwipe } from "../lib/useSwipe";
// const map: Record<string, ReactNode> = {}; //这里使用map会有内存泄漏，当路由不在是welcome，WelcomeLayout组件会销毁，但是map还在js内存中

export const WelcomeLayout: React.FC = () => {
  const linkMap: Record<string, string> = {
    "/welcome/1": "/welcome/2",
    "/welcome/2": "/welcome/3",
    "/welcome/3": "/welcome/4",
    "/welcome/4": "/welcome/1",
  };
  const [extraStyle, setExtraStyle] = useState<{
    position: "relative" | "absolute";
  }>({ position: "relative" });
  const nav = useNavigate();
  const location = useLocation();
  const outlet = useOutlet();
  const animating = useRef(false);
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
    onStart: () => {
      setExtraStyle({ position: "absolute" });
    },
    onRest: () => {
      animating.current = false;
      setExtraStyle({ position: "relative" });
    },
  });

  const main = useRef<HTMLElement>(null);
  const { direction } = useSwipe(main);
  useEffect(() => {
    if (direction === "right") {
      if (animating.current) {
        return;
      }
      animating.current = true;
      nav(linkMap[location.pathname]);
    }
  }, [direction]);
  return (
    <div bg="#009812" h-screen flex flex-col items-stretch pb-16px pt-16px>
      <header text-center shrink-0>
        <img src={logo} alt="logo" width={"64px"} />
        <h1 text-32px color="#fff">
          山竹记账
        </h1>
      </header>
      <main shrink-1 grow-1 relative ref={main}>
        {transitions((style, pathname) => (
          <animated.div
            key={pathname}
            style={{ ...style, ...extraStyle }}
            w="100%"
            h="100%"
            p-16px
            flex
          >
            <div grow-1 bg-white flex justify-center items-center rounded-8px>
              {map.current[pathname]}
            </div>
          </animated.div>
        ))}
      </main>
    </div>
  );
};
