import * as React from "react";
import { ReactNode } from "react";
type Props = {
  className?: string;
  children?: ReactNode;
};
export const TopBg: React.FC<Props> = (props) => {
  const { className, children } = props;
  return (
    <div
      className={className}
      bg="linear-gradient(0deg, #12b696 0%, #56ca71 100%);"
    >
      {children}
    </div>
  );
};
