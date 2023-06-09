import * as React from "react";
import { TopNav } from "../components/ItemPage/TopNav";
import { TopBg } from "../components/TopBg";
import { useTabs } from "../hooks/useTabs";

export const ItemNewPage: React.FC = () => {
  const { Div } = useTabs({
    className: "mt-10px",
    data: [
      {
        title: "第一个tab",
        content: "第一个content第一个content第一个content第一个content",
        show: true,
      },
      {
        title: "第二个tab",
        content: "第二个content第二个content第二个content第二个content",
        show: false,
      },
    ],
  });
  return (
    <>
      <TopBg>
        <TopNav name="back" title="记一笔" />
        {Div}
      </TopBg>
    </>
  );
};
