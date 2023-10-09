import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Badge } from "rsuite";


const Footer = () => {
  const location = useLocation();
  return (
    <div className="w-[100%] h-[10%]">
      {/* Mobile */}
      <div className="w-[100%] h-[100%] bg-white flex items-center justify-between px-5 sm:hidden">
        <Link to={"/"}>
          <span className="flex flex-col justify-center items-center">
            <box-icon
              type="solid"
              name="home"
              color={`#${location.pathname === "/" ? "9333ea" : "78716c"}`}
            ></box-icon>
            <span className={`sm-link font-thin text-sm`}>Home</span>
          </span>
        </Link>
        <Link to={"/orders"}>
          <span className="flex flex-col justify-center items-center">
            <box-icon
              type="solid"
              name="cart"
              color={`#${
                location.pathname === "/orders" ? "9333ea" : "78716c"
              }`}
            ></box-icon>
            <span className={`sm-link font-thin text-sm`}>Orders</span>
          </span>
        </Link>
        <Link to={"/services"}>
          <span className="flex flex-col justify-center items-center relative">
            <box-icon
              type="solid"
              name="bolt-circle"
              color={`#${
                location.pathname === "/services" ? "9333ea" : "78716c"
              }`}
            ></box-icon>
            <span className={`sm-link font-thin text-sm`}>Services</span>
            <span
              className={`absolute -top-2 right-2 ${
                location.pathname === "/services" ? "hidden" : "block"
              }`}
            >
              <Badge color="green" />
            </span>
          </span>
        </Link>
        <Link to={"/custom"}>
          <span className="flex flex-col justify-center items-center">
            <box-icon
              name="slider-alt"
              color={`#${
                location.pathname === "/custom" ? "9333ea" : "78716c"
              }`}
            ></box-icon>
            <span className={`sm-link font-thin text-sm`}>Custom</span>
          </span>
        </Link>
        <Link to={"/profile"}>
          <span className="flex flex-col justify-center items-center">
            {false ? (
              <box-icon
                name="log-out"
                type="solid"
                color={`#${
                  location.pathname === "/profile" ? "9333ea" : "78716c"
                }`}
              ></box-icon>
            ) : (
              <box-icon
                type="solid"
                name="user"
                color={`#${
                  location.pathname === "/profile" ? "9333ea" : "78716c"
                }`}
              ></box-icon>
            )}
            <span className={`sm-link font-thin text-sm`}>Profile</span>
          </span>
        </Link>
      </div>
      {/*  */}
      <div className="hidden w-[100%] h-[100%] bg-white sm:flex items-center justify-end px-5">
        <span className="flex gap-2">
          <span className="font-thin me-2">Get in tough</span>
          <a href="">
            <box-icon type="logo" name="instagram"></box-icon>
          </a>
          <a href="">
            <box-icon name="whatsapp" type="logo"></box-icon>
          </a>
          <a href="">
            <box-icon name="gmail" type="logo"></box-icon>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
