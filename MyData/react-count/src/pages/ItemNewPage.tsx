import * as React from "react";
import { useState } from "react";
import { TopNav } from "../components/ItemPage/TopNav";
import { TopBg } from "../components/TopBg";

export const ItemNewPage: React.FC = () => {
  const [showTabs, setShowTabs] = useState<{
    content1: "block" | "none";
    content2: "block" | "none";
  }>({ content1: "block", content2: "none" });

  const handleShowTabs = (value: string) => {
    if (value === "content1") {
      setShowTabs({ content1: "block", content2: "none" });
    } else if (value === "content2") {
      setShowTabs({ content1: "none", content2: "block" });
    }
  };

  return (
    <>
      <TopBg>
        <TopNav name="back" title="记一笔" />
      </TopBg>
      <div>
        <ul flex items-center justify-center gap-30px>
          <li onClick={() => handleShowTabs("content1")}>list 1</li>
          <li onClick={() => handleShowTabs("content2")}>list 2</li>
        </ul>
      </div>
      <div>
        <div style={{ display: showTabs.content1 }}>
          content1content1content1content1
        </div>
        <div style={{ display: showTabs.content2 }}>
          content2content2content2content2
        </div>
      </div>
    </>
  );
};
