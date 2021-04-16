import React from "react";
import "./line.css";
interface Props {
  color: string;
}

export const HorizontalLine = (props: Props) => {
  const { color } = props;

  return (
    <div
      className="horizontal_line"
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
};
