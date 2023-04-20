import * as React from "react";
type Props = {
  name: string;
  className?: string;
  onClick?: () => void;
};
export const Icon: React.FC<Props> = (props) => {
  const { name, className, onClick } = props;
  return (
    <svg className={["j-icon", className].join(" ")} onClick={onClick}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
