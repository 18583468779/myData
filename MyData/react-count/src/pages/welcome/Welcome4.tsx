import * as React from "react";
import { Link } from "react-router-dom";
export const Welcome4: React.FC = () => {
  return (
    <>
      <div>Welcome4 </div>
      <Link to={"/welcome/1"}>下一页</Link>
    </>
  );
};
