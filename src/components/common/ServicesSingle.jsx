import React from "react";
import Logo from "../../assets/images/png-ads.png";

const ServicesSingle = (props) => {
  return (
    <div className="w-[100%] flex flex-col justify-between items-center px-5 py-10 mb-5 bg-custom rounded-lg">
      <div className="w-[100%] flex justify-between items-center">
        <div className="">
          <span className="flex items-center gap-5 mb-3">
            <img src={Logo} alt="headerLogo" className="w-[50px]" />
            <span className="flex flex-col justify-center">
              <span className="font-bold me-3 text-lg">
                {props.data.service ? props.data.service : "Service"}
              </span>
              {props.data.views}
            </span>
          </span>
          <span>
            ₹{props.data.price} <span className="font-thin text-[13px]">Price</span>
          </span>
        </div>
        <div className="">
          {props.data.perks.map((perk, index) => (
            <span key={index} className="flex items-center mb-2">
              <box-icon
                name="check-circle"
                type="solid"
                color="#26b0ff"
              ></box-icon>
              <span className="font-thin ms-1 text-sm">{perk}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex w-[100%] gap-10">
        <button className="bg-[#26b0ff] w-[100%] p-2 mt-5 text-white rounded">
          Add to Cart
        </button>
        <button className="bg-[#26b0ff] w-[100%] p-2 mt-5 text-white rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ServicesSingle;
