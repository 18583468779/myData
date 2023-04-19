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

  const [selected, setSelected] = useState<TimeRange>("thisMouth"); //默认的本月
  return (
    <div>
      <Div>
        <TopNav />
        <TimeRangePicker selected={selected} setSelected={setSelected} />
      </Div>
      <ItemsSummary />
      <ItemsList />
      <AddItemPage />
    </div>
  );
};
