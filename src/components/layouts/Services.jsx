import React from 'react'
import ServiceContainer from '../widgets/ServiceContainer';
import Google from "../../pages/Google";
import Youtube from "../../pages/Youtube";
import Facebook from "../../pages/Facebook";
import Instagram from "../../pages/Instagram";

const Services = () => {
  return (
    <div className="w-100 h-[100%] flex flex-col">
      <Google />
      <Youtube />
      <Instagram />
      <Facebook />
    </div>
  );
}

export default Services