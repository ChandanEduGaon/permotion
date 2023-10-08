import React from "react";
import Swal from "sweetalert2";
import MutableElement from "../MutableElement";

import Hero from "../common/Hero";
import Offer from "../widgets/Offer";
import Slider from "../widgets/Slider";
import { Divider } from "rsuite";
import LeftDrawer from "../widgets/LeftDrawer";

const Home = () => {
  const offers = [
    {
      title: "Youtube Views",
      src: "https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg",
      p_price: "300",
      c_price: "120",
      quantity: "100K",
      duration: "1000",
    },
    {
      title: "Instagram Followers",
      src: "https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg",
      p_price: "500",
      c_price: "230",
      quantity: "1K",
      duration: "600",
    },
    {
      title: "Facebook Likes",
      src: "https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg",
      p_price: "1990",
      c_price: "1690",
      quantity: "10K",
      duration: "100",
    },
  ];
  return (
    <div className="w-[100%] h-[100%]">
      <Hero />
      <div className="w-[100%] bg-white flex flex-col justify-center items-center py-10">
        <span className="max-w-[70%] text-center font-light">
          Lorem <span className="text-purple-600 font-normal">20+</span> ipsum
          dolor sit amet Lorem, ipsum.
        </span>
        <div className="w-[100%] flex justify-center items-center overflow-x-scroll gap-6 pt-5">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="yt"
            className="w-[20%]"
          />
          <img
            src="https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
            alt="yt"
            className="w-[20%]"
          />
          <img
            src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"
            alt="yt"
            className="w-[10%]"
          />
        </div>
      </div>
      <Divider>Latest offer!</Divider>
      <div className="w-[100%] bg-white flex justify-center items-center py-5 gap-3 flex-wrap">
        {offers.map((item, index) => (
          <Offer key={index} data={item} />
        ))}
      </div>
      <Divider>Choose your service</Divider>
      <div className="w-[100%] bg-white flex justify-center items-center py-5 gap-3 flex-wrap">
        <LeftDrawer />
      </div>
    </div>
  );
};

export default Home;

// anwa hqsx gerz trqj
