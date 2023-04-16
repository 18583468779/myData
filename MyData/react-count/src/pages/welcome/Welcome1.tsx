import * as React from "react";
import { Link } from "react-router-dom";
export const Welcome1: React.FC = () => {
  return (
    <>
      <div>Welcome1 </div>
      <Link to={"/welcome/2"}>下一页</Link>
    </>
  );
};
