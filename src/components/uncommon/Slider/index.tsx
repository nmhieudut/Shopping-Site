import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slider.css";
export interface IChildren {
  id: string | undefined;
  url: string | undefined;
  legend: string | undefined;
}

interface Props {
  children: IChildren[] | any;
}

export const Slider = (props: Props) => {
  const { children } = props;
  return (
    <Carousel autoPlay infiniteLoop interval={2000}>
      {children.length > 0 &&
        children.map(child => (
          <div key={child.id} className="slider__container">
            <img
              alt="url"
              src={child.url}
              style={{ paddingTop: 20 }}
              width="100%"
            />
            <p className="legend">{child.legend}</p>
          </div>
        ))}
    </Carousel>
  );
};
