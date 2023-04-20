import * as React from "react";
import { TopNav } from "../components/ItemPage/TopNav";
import { TopBg } from "../components/TopBg";
export const SignIn: React.FC = () => {
  return (
    <div>
      <TopBg>
        <TopNav name="back" title="登录" />
      </TopBg>
    </div>
  );
};
