import axios from "axios";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

interface Props {}

export const ItemsList: React.FC<Props> = () => {
  const [moreLoading, setMoreLoading] = useState(true);
  const getKey = (pageIndex: number, prev: Resources<Item>) => {
    if (prev) {
      const sendNum = prev.pager.count - prev.pager.page * prev.pager.per_page; //一共发送了多少的数据
      if (sendNum > 0) {
        return `/api/v1/items?page=${pageIndex + 1}`; // SWR key
      } else {
        setMoreLoading(false);
      }
    }
    return `/api/v1/items?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, isLoading } = useSWRInfinite(
    getKey,
    async (path) => (await axios.post<Resources<Item>>(path)).data
  );

  const onMoreLoading = () => {
    setSize(size + 1);
  };

  if (isLoading) {
    return (
      <div text-center text-28px mt-50px>
        加载中
      </div>
    );
  }
  if (error) {
    return <div>出错了</div>;
  }

  const isLoadingMore = data?.[size - 1] === undefined && !error;
  if (!data) {
    return <div>没有数据</div>;
  } else {
    return (
      <>
        <ol>
          {data.map(({ resources }) => {
            return resources.map((items) => (
              <li
                key={items.id}
                grid
                grid-cols="[auto_1fr_auto]"
                grid-rows-2
                px-16px
                py-8px
                gap-x-12px
                border-b-1
                b-color="#EEE"
              >
                <div
                  row-start-1
                  col-start-1
                  row-end-3
                  col-end-2
                  text-24px
                  w-48px
                  h-48px
                  bg="#D8D8D8"
                  rounded="50%"
                  flex
                  justify-center
                  items-center
                >
                  😘
                </div>
                <div row-start-1 col-start-2 row-end-2 col-end-3>
                  旅行
                </div>
                <div row-start-2 col-start-2 row-end-3 col-end-4 text="#999999">
                  2011年1月1日
                </div>
                <div row-start-1 col-start-3 row-end-2 col-end-4 text="#53A867">
                  ￥999
                </div>
              </li>
            ));
          })}
        </ol>
        <div p-16px text-center>
          {isLoadingMore && <p>正在加载中...</p>}
          {isLoadingMore ? (
            <></>
          ) : moreLoading ? (
            <button onClick={onMoreLoading}>加载更多</button>
          ) : (
            <div>没有数据了...</div>
          )}
        </div>
      </>
    );
  }
};
