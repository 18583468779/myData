import * as React from "react";
import { AddItemPage } from "../components/AddItemPage";
import { ItemsList } from "../components/ItemPage/ItemsList";
import { ItemsSummary } from "../components/ItemPage/ItemsSummary";
import {
  TimeRange,
  TimeRangePicker,
} from "../components/ItemPage/TimeRangePicker";
import { TopNav } from "../components/ItemPage/TopNav";
import styled from "styled-components";
import { useState } from "react";
export const ItemPage: React.FC = () => {
  const Div = styled.div`
    background: linear-gradient(0deg, #12b696 0%, #56ca71 100%);
  `;
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
  return (
    <div>
      <Div>
        <TopNav />
        <TimeRangePicker selected={selected} setSelected={setSelected} />
      </Div>
      <ItemsSummary />
      <ItemsList items={items} />
      <AddItemPage />
    </div>
  );
};
