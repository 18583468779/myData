import * as React from "react";
import { CurrentUser } from "./CurrentUser";
import { Menu } from "./Menu";
import { useMenuStore } from "../../store/useMenuStore";
export const TopMenu: React.FC = () => {
  const { setVisible } = useMenuStore();
  return (
    <>
      <div
        fixed
        top-0
        left-0
        h-screen
        w-full
        bg="[rgba(0,0,0,.7)]"
        onClick={() => setVisible(false)}
        z-998
      ></div>
      <div>
        <div
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
        </div>
      </div>
    </>
  );
};
