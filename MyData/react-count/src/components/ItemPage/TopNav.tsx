import * as React from "react";
import { Icon } from "../Icon";
import { useMenuStore } from "../../store/useMenuStore";
export const TopNav: React.FC = () => {
  const { visible, setVisible } = useMenuStore((state) => state);

  return (
    <div p-16px flex items-center pt-26px>
      <Icon
        name={"menu"}
        className="w-30px h-30px fill"
        onClick={() => setVisible(!visible)}
      />
      <span text-24px ml-20px text-white>
        账目列表
      </span>
    </div>
  );
};
