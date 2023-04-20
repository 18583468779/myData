import { MockMethod } from "vite-plugin-mock";

let id = 0;
const addId = () => {
  id += 1;
  return id;
};

const create = (attrs?: Partial<Item>): Item => {
  return {
    id: addId(),
    kind: "incomes",
    amount: 1000,
    user_id: 1,
    tag_ids: [1],
    happen_at: "2021-01-01T00:00:00.000Z",
    created_at: "2021-01-01T00:00:00.000Z",
    updated_at: "2021-01-01T00:00:00.000Z",
    ...attrs,
  };
};

const createList = (number: number, attrs?: Partial<Item>): Item[] =>
  Array.from({ length: number }).map(() => create(attrs));

const createResources = (
  { perPage = 10, page = 1, count = 10 },
  attrs?: Partial<Item>
): Resources<Item> => {
  const sendNum = (page - 1) * perPage;
  const left = count - sendNum;
  return {
    resources: left > 0 ? createList(Math.min(left, perPage), attrs) : [],
    pager: {
      page,
      per_page: perPage,
      count,
    },
  };
};

export const itemsMock: MockMethod[] = [
  {
    url: "/api/v1/items",
    method: "post",
    statusCode: 200,
    timeout: 1000,
    response: ({
      query,
    }: {
      query: Record<string, string>;
    }): Resources<Item> => {
      return createResources({
        perPage: 10,
        count: 40,
        page: parseInt(query.page),
      });
    },
  },
];
