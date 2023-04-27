import { ReactNode, useEffect, useState } from "react";

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
      <div>
        <ul flex items-center justify-center gap-30px>
          {data.map((item, index) => (
            <li key={item.title} onClick={() => handleShowTabs(index)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div p-l-10px p-r-10px>
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
