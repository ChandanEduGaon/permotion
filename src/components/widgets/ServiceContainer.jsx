import React from "react";
import { Service } from "../common/Service";

const ServiceContainer = () => {
  const ytData = [
    {
      service: "Views",
      price: "1000",
      views: "1200",
      perks: ["Delivery 1-2 days", "None drop", "No password needed"],
    },
    {
      service: "Followers",
      price: "1000",
      views: "1200",
      perks: ["Delivery 1-2 days", "None drop", "No password needed"],
    },
    {
      service: "Comments",
      price: "1000",
      views: "1200",
      perks: ["Delivery 1-2 days", "None drop", "No password needed"],
    },
    {
      service: "Likes",
      price: "1000",
      views: "1200",
      perks: ["Delivery 1-2 days", "None drop", "No password needed"],
    },
    {
      price: "1000",
      views: "1200",
      perks: ["Delivery 1-2 days", "None drop", "No password needed"],
    },
  ];
  const insData = [
    {
      price: "500",
      views: "600",
      perks: ["Delivery 1-2 days", "None drop", "No password needed"],
    },
    {
      price: "1000",
      views: "1200",
      perks: ["Delivery 1-2 days", "None drop", "No password needed"],
    },
  ];
  return (
    <div className="w-100 flex flex-col items-start md:justify-center md:flex-row md:flex-wrap">
      <Service category="YouTube" data={ytData} />
      <Service category="Instagram" data={insData} />
      <Service category="Facebook" data={insData} />
    </div>
  );
};

export default ServiceContainer;
