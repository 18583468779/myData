import * as React from "react";
type Props = {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
};
export const Input: React.FC<Props> = (props) => {
  const {
    className,
    type = "text",
    placeholder,
    onChange,
    value,
    name,
  } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
