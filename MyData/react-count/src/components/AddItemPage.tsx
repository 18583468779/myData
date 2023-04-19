import * as React from "react";
import { Icon } from "./Icon";
import { Link } from "react-router-dom";
export const AddItemPage: React.FC = () => {
  return (
    <Link to="/items/new">
      <button
        w-56px
        h-56px
        bg="#009866"
        rounded="50%"
        b-none
        text-white
        fixed
        bottom-16px
        right-16px
        flex
        justify-center
        items-center
      >
        <Icon name={"add"} className={"w-44px h-44px"} />
      </button>
    </Link>
  );
};
