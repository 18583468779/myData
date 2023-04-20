import * as React from "react";
import { AddItemPage } from "../components/AddItemPage";
import { ItemsList } from "../components/ItemPage/ItemsList";
import { ItemsSummary } from "../components/ItemPage/ItemsSummary";
import {
  TimeRange,
  TimeRangePicker,
} from "../components/ItemPage/TimeRangePicker";
import { TopNav } from "../components/ItemPage/TopNav";
import { useState } from "react";
import { useMenuStore } from "../store/useMenuStore";
import { TopMenu } from "../components/TopMenu/TopMenu";
import { TopBg } from "../components/TopBg";
export const ItemPage: React.FC = () => {
  const [selected, setSelected] = useState<TimeRange>("thisMouth"); //默认的本月
  const { visible, setVisible } = useMenuStore((state) => state); //控制topMenu的出现
  return (
    <div>
      <TopBg>
        <TopNav name="menu" title="账目列表" />
        <TimeRangePicker selected={selected} setSelected={setSelected} />
      </TopBg>
      <ItemsSummary />
      <ItemsList />
      <AddItemPage />
      <TopMenu visible={visible} setVisible={setVisible} />
    </div>
  );
};
