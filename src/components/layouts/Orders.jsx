import React from "react";
import Order from "../widgets/Order";

const Orders = () => {
  const orders = [
    "Instagram Followers",
    "Twitter Likes",
    "Facebook Views",
    "Google Reviews",
    "Youtube Views",
    "Instagram Followers",
    "Twitter Likes",
    "Facebook Views",
    "Google Reviews",
    "Youtube Views",
  ];
  return (
    <div className="w-100 h-[100%]">
      {orders.map((item, index) => (
        <Order key={index} service={item} time={ index+1} />
      ))}
    </div>
  );
};

export default Orders;
