import * as React from "react";
import { Icon } from "../Icon";
export const TopNav: React.FC = () => {
  return (
    <div p-16px flex items-center pt-26px>
      <Icon name={"menu"} className="w-30px h-30px fill" />
      <span text-24px ml-20px text-white>
        账目列表
      </span>
    </div>
  );
};
