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
export const ItemPage: React.FC = () => {
  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: "incomes",
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: "2021-01-01T00:00:00.000Z",
      created_at: "2021-01-01T00:00:00.000Z",
      updated_at: "2021-01-01T00:00:00.000Z",
    },
    {
      id: 2,
      kind: "incomes",
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: "2021-01-01T00:00:00.000Z",
      created_at: "2021-01-01T00:00:00.000Z",
      updated_at: "2021-01-01T00:00:00.000Z",
    },
  ]);

  const [selected, setSelected] = useState<TimeRange>("thisMouth"); //默认的本月

  //
  const { visible, setVisible } = useMenuStore((state) => state);
  return (
    <div>
      <div bg="linear-gradient(0deg, #12b696 0%, #56ca71 100%);">
        <TopNav />
        <TimeRangePicker selected={selected} setSelected={setSelected} />
      </div>
      <ItemsSummary />
      <ItemsList />
      <AddItemPage />
      <TopMenu visible={visible} setVisible={setVisible} />
    </div>
  );
};
