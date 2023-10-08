import React from "react";
import Logo from "../../assets/images/png-ads.png";

const Order = (props) => {
  return (
    <div className="w-100">
      <div className="relative flex justify-between items-center w-100 px-5 py-3 bg-slate-200 rounded-lg mx-5 mb-5 lg:h-[20%]">
        <div className="flex items-center gap-2 md:gap-7">
          <img src={Logo} alt="headerLogo" className="w-[50px] lg:w-[80px]" />
          <div className="flex flex-col justify-start">
            <span className="md:text-2xl lg:text-3xl">{props.service}</span>
            <span className="flex font-thin gap-2">
              <span>₹1000/-</span>
              <span>10K views</span>
            </span>
            <span className="text-[10px] font-thin">Order on : 01/02/2022 11:00 PM</span>
          </div>
        </div>
        {props.time < 3 ? (
          <box-icon name="dots-vertical-rounded"></box-icon>
        ) : (
          <box-icon name="check-circle" type="solid" color="#090"></box-icon>
        )}
      </div>
    </div>
  );
};

export default Order;
