import * as React from "react";
import { Icon } from "../Icon";
import { useMenuStore } from "../../store/useMenuStore";
type Props = {
  name: string;
  title: string;
};
export const TopNav: React.FC<Props> = (props) => {
  const { name, title } = props;
  const { visible, setVisible } = useMenuStore((state) => state);

  return (
    <div p-16px flex items-center pt-26px>
      <Icon
        name={name}
        className="w-30px h-30px fill"
        onClick={() => setVisible(!visible)}
      />
      <span text-24px ml-20px text-white>
        {title}
      </span>
    </div>
  );
};
