import * as React from "react";
import { CurrentUser } from "./CurrentUser";
import { Menu } from "./Menu";
import { animated, useSpring } from "@react-spring/web";
type Props = {
  visible?: boolean;
  setVisible: (visible: boolean) => void;
};

export const TopMenu: React.FC<Props> = (props) => {
  const { visible, setVisible } = props;
  const maskStyles = useSpring({
    opacity: visible ? 1 : 0,
  });
  const menuStyles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(-100%)",
  });

  return (
    <div>
      <animated.div
        style={maskStyles}
        fixed
        top-0
        left-0
        h-screen
        w-full
        bg="[rgba(0,0,0,.7)]"
        onClick={() => setVisible(false)}
        className={visible ? " z-998" : "z--1"}
      ></animated.div>
      <animated.div
        style={menuStyles}
        fixed
        top-0
        left-0
        w="70vw"
        max-w-20em
        h-screen
        flex
        flex-col
        z-999
      >
        <CurrentUser className="grow-0 shrink-0" />
        <Menu className="grow-1 shrink-1" />
      </animated.div>
    </div>
  );
};
