import * as React from "react";

export type TimeRange = "thisMouth" | "lastMouth" | "thisYear" | "custom";
type Props = {
  selected: TimeRange;
  setSelected: (selected: TimeRange) => void;
};

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
          <li
            relative
            text-16px
            transition-all
            duration-300
            ease-linear
            key={item.key}
            className={item.key === selected ? "active" : ""}
            onClick={() => setSelected(item.key)}
          >
            {item.value}
          </li>
        ))}
      </ol>
    </>
  );
};
