import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import "../assets/css/useTabs.scss";

type Options = {
  className?: string;
  data: { title: string; content: ReactNode; show?: boolean }[];
};

export const useTabs = (options: Options) => {
  const { className, data } = options;
  const [showTabs, setShowTabs] = useState(() => data.map((item) => item.show));
  const arr = Array.from({ length: data.length }).map((item) => (item = false));
  const handleShowTabs = (value: number) => {
    const arr1 = arr.map((item) => (item = false));
    arr1[value] = true;
    setShowTabs(() => arr1);
  };

  const Div = (
    <div className={className}>
      <div pb-10px>
        <ul flex items-center justify-center gap-30px>
          {data.map((item, index) => (
            <li
              key={item.title}
              onClick={() => handleShowTabs(index)}
              text-white
              style={{ color: showTabs[index] ? "white" : "#eee" }}
              p-l-10px
              p-r-10px
              text-16px
            >
              {item.title}
            </li>
          ))}
        </ul>
        {/* {
          <p
            style={{
              transform: `translateX()`,
              width: `${data.length} * 10%px`,
            }}
            className={"pActive"}
          ></p>
        } */}
      </div>
      <div p-l-10px p-r-10px bg-white>
        {data.map((item, index) => (
          <div
            key={item.title}
            style={{ display: showTabs[index] ? "block" : "none" }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );

  return { Div };
};
