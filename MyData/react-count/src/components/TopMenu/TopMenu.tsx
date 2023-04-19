import * as React from "react";
import { CurrentUser } from "./CurrentUser";
import { Menu } from "./Menu";
export const TopMenu: React.FC = () => {
  return (
    <div
      fixed
      top-0
      left-0
      w="70vw"
      max-w-20em
      h-screen
      flex
      flex-col
      b-3px
      b-red
    >
      <CurrentUser className="grow-0 shrink-0" />
      <Menu className="grow-1 shrink-1" />
    </div>
  );
};
