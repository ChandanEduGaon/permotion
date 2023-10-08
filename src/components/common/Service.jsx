import React from "react";
import ServicesSingle from "./ServicesSingle";
import { Link } from "react-router-dom";

export const Service = (props) => {
  return (
    <div className="w-[100%] h-[70%] md:w-[50%] md:h-[50%] lg:w-[40%] lg:h-[50%]">
      <div className="flex justify-between items-center px-5">
        <span className="font-bold py-5 text-2xl tracking-wider">
          {props.category}
        </span>
        {/* services/${props.category.toLowerCase()} */}
        <Link to={``}>view all</Link>
      </div>
      <div className="w-[100%] px-5 max-h-96 overflow-scroll">
        {props.data.map((item, index) => (
          <ServicesSingle key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
