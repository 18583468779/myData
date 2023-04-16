import * as React from "react";
import { Outlet } from "react-router-dom";
export const LayOut: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
