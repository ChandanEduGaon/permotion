import React from "react";
import { Carousel } from "rsuite";

const Slider = () => {
  return (
    <Carousel autoplay className="custom-slider max-h-[150px]">
      <span className="flex justify-center items-center text-2xl text-purple-700">
        Facebook
      </span>
      <span className="flex justify-center items-center text-2xl text-purple-700">
        YouTube
      </span>
      <span className="flex justify-center items-center text-2xl text-purple-700">
        Instagram
      </span>
    </Carousel>
  );
};

export default Slider;
