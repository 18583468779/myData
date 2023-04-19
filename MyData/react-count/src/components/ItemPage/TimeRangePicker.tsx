import * as React from "react";
import styled from "styled-components";

export type TimeRange = "thisMouth" | "lastMouth" | "thisYear" | "custom";
type Props = {
  selected: TimeRange;
  setSelected: (selected: TimeRange) => void;
};
const Li = styled.li`
  transition: all 0.3s ease;
  position: relative;
  font-size: 16px;
`;

export const TimeRangePicker: React.FC<Props> = (props) => {
  const { selected, setSelected } = props;
  const timeRange: { key: TimeRange; value: string }[] = [
    { key: "thisMouth", value: "本月" },
    { key: "lastMouth", value: "上个月" },
    { key: "thisYear", value: "今年" },
    { key: "custom", value: "自定义时间" },
  ];

  return (
    <>
      <ol flex p-16px gap-20px pt-0px text-white>
        {timeRange.map((item) => (
          <Li
            relative
            key={item.key}
            className={item.key === selected ? "active" : ""}
            onClick={() => setSelected(item.key)}
          >
            {item.value}
          </Li>
        ))}
      </ol>
    </>
  );
};
