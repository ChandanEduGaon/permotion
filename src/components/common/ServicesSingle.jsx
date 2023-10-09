import React, { useState } from "react";
import Logo from "../../assets/images/png-ads.png";
import { InputNumber } from "rsuite";

const ServicesSingle = (props) => {
  const [views, setViews] = useState(props.data.views);
  const [price, setPrice] = useState(props.data.price);
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
              <div className="w-[50%] my-2">
                <InputNumber
                  step={100}
                  value={views > 0 ? views : 0}
                  onChange={(value) => {
                    setViews(value);
                    setPrice(views > 0 ? 0.75 * value : 0);
                  }}
                />
              </div>
            </span>
          </span>
          <span>
            ₹{price} <span className="font-thin text-[13px]">Price</span>
          </span>
        </div>
        <div className="">
          {props.data.perks.map((perk, index) => (
            <span key={index} className="flex items-center mb-2">
              <box-icon
                name="check-circle"
                type="solid"
                size="17px"
                color="#26b0ff"
              ></box-icon>
              <span className="font-thin ms-1 text-[10px] md:text-[15px]">
                {perk}
              </span>
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
