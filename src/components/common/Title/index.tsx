import React from "react";
import "styles/css/components/common/title.css";
interface Props {
  message?: string;
  color?: string;
}

export const Title = (props: Props) => {
  const { message, color } = props;
  return (
    <div className="title__container" style={{ color: color }}>
      {message}
    </div>
  );
};
