import { useState } from "react";

type Options = {
  initVisible?: boolean;
};
export const usePopup = (options: Options) => {
  const { initVisible = false } = options;
  const [visible, setVisible] = useState(initVisible);

  const show = () => {
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };
  const popup = <div>mpopupy</div>;
  return {
    popup,
  };
};
