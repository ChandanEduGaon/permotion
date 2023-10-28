import React from "react";

const DiscoveryViewsComponent = (props) => {
  return (
    <div className="w-full rounded-md p-6">
      <h1 className="text-2xl font-bold -mb-2 tracking-tighter">
        {props.title}
      </h1>
      <span className="text-gray-400 text-[10px]">{props.service}</span>
      <div className="w-[100%] flex justify-start items-center overflow-x-auto mt-2">
        {props.data.map((item, index) => (
          <div
            key={index}
            className="min-w-[80%] sm:min-w-[30%] min-h-[150px] flex flex-col justify-center items-start me-1 p-4 bg-purple-300 rounded shadow-md"
          >
            <p className="text-md font-semibold">{item.views}</p>
            <p className="text-sm text-gray-600">{`@ Just ${item.price} Only`}</p>
            <p className="text-sm text-white">{item.quality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoveryViewsComponent;
