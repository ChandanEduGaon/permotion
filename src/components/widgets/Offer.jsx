import React from "react";
import minutesToHMS from "../../helper";

const Offer = (props) => {
  const minutesToHMS = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const seconds = 0; // You can add seconds if needed.

    // Use padStart to ensure that single-digit hours, minutes, and seconds have leading zeros.
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = remainingMinutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[80%] md:w-[30%] p-5 mb-5 rounded-lg text-white flex justify-between relative">
      <div className="w-[70%]">
        <div>
          <h1 className="text-lg">{props.data.title}</h1>
          <h1 className="font-bold text-2xl py-1">{props.data.quantity}</h1>
          <span className="font-thin text-sm">Rs {props.data.c_price}/-</span>
          <span className="font-thin text-sm ms-3 line-through">
            Rs {props.data.p_price}/-
          </span>
        </div>
        <div>
          <button className="bg-[#26b0ff] px-5 py-1 mt-5 rounded">View</button>
        </div>
      </div>
      <div className="w-[30%] flex justify-center items-center">
        <img
          src={props.data.src}
          alt="yt"
          className="max-w-[80%] min-w-[80%] rounded-lg"
        />
      </div>
      <span className="absolute bottom-3 right-4">
        {/* End in - {minutesToHMS(props.data.duration)}s */}
        Expired
      </span>
    </div>
  );
};

export default Offer;
