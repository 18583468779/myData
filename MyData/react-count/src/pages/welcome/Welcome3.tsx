import * as React from "react";
import { Link } from "react-router-dom";
export const Welcome3: React.FC = () => {
  return (
    <div style={{ border: "1px solid #ccc", width: "100%" }}>
      <div>Welcome3 </div>
      <Link to={"/welcome/4"}>下一页</Link>
    </div>
  );
};
