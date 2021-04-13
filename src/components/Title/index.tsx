import React from "react";
import "./title.css"
interface Props {
  message: string;
}

export const Title = (props: Props) => {
  const { message } = props;
  return <div className="title__container">{message}</div>;
};
