import React from "react";
import Typer from "../Typer";
import heroLogo from "../../assets/images/png-ads.png";

const Hero = () => {
  const sequence = [
    "Instagram",
    2000,
    "YouTube",
    2000,
    "Facebook",
    2000,
    "TikTok",
    2000,
  ];
  const animationStyles = {
    animBottom: {
      animation: "move-bottom ease 1s",
    },
    animTop: {
      animation: "move-top ease 1s",
    },
  };
  return (
    <div className="hero w-100 sm:h-[45%] md:h-[60%] h-[35%] relative overflow-hidden bg-purple-600">
      <div className="w-[100%] h-[100%] absolute sm:flex justify-center items-center flex flex-col">
        <div className="w-[100%] p-3 flex justify-center items-center">
          <img
            src={heroLogo}
            alt="logo"
            style={animationStyles.animBottom}
            className="w-[30%] md:w-[30%] lg:w-[10%]"
          />
        </div>
        <div className="w-[100%] flex items-center flex-col sm:p-10">
          <span className="text-white font-thin">
            Get real{" "}
            <span className="font-bold text-green-400 text-xl md:text-2xl">
              Growth
            </span>
            , Get real{" "}
            <span className="font-bold text-green-400 text-xl md:text-2xl">
              Traffic
            </span>
          </span>
          <span className="text-white font-semibold">on</span>
          <span className="font-extrabold text-3xl sm:text-4xl md:text-6xl text-white mb-1">
            <Typer sequence={sequence} textColor="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
