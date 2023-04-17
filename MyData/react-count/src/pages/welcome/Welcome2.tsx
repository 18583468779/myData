import * as React from "react";
import { Link } from "react-router-dom";
export const Welcome2: React.FC = () => {
  return (
    <div style={{ border: "1px solid #ccc", width: "100%" }}>
      <div>Welcome2 </div>
      <Link to={"/welcome/3"}>下一页</Link>
    </div>
  );
};
