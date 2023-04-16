import * as React from "react";
import { Link } from "react-router-dom";
export const Welcome2: React.FC = () => {
  return (
    <>
      <div>Welcome2 </div>
      <Link to={"/welcome/3"}>下一页</Link>
    </>
  );
};
