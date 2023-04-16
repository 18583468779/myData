import * as React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
export const Welcome1: React.FC = () => {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 200 },
  });

  return (
    <>
      <div>Welcome1 </div>
      <Link to={"/welcome/2"}>下一页</Link>
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
    </>
  );
};
