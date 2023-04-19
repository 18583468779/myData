import * as React from "react";
import { useEffect } from "react";
type Option = {
  message: string;
};
export const useTitle: React.FC<Option> = (option) => {
  useEffect(() => {
    document.title = option.message;
  }, [option.message]);
  return null;
};
