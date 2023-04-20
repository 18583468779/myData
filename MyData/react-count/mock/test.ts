import { MockMethod } from "vite-plugin-mock";
import { meMock } from "./me.mock";
import { itemsMock } from "./items.mock";

export default [...meMock, ...itemsMock] as MockMethod[];
