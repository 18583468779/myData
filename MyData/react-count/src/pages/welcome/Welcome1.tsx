import * as React from "react";
import { Link } from "react-router-dom";
export const Welcome1: React.FC = () => {
  return (
    <div style={{ border: "1px solid #ccc", width: "100%" }}>
      <div text-24px>Welcome1 </div>
      <div flex>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <Link to={"/welcome/2"}>下一页</Link>
    </div>
  );
};
