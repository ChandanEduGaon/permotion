import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Badge } from "rsuite";
import CardLink from "../widgets/CardLink";

const Footer = () => {
  const location = useLocation();
  const [visibility, setVisibility] = useState(false);
  const toggle = () => {
    setVisibility(!visibility);
  };
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
        <span
          className="flex flex-col justify-center items-center relative"
          onClick={toggle}
        >
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

      {/* Modal */}
      <div
        className={`${
          visibility ? "flex" : "hidden"
        } w-screen h-screen absolute top-0 left-0 p-5 flex-col justify-center items-center`}
        style={{ backgroundColor: "rgba(0,0,0,.9" }}
        onClick={toggle}
      >
        <CardLink
          onClick={toggle}
          link={"/google"}
          title={"Google"}
          bg={"#4285F4"}
        />
        <CardLink
          onClick={toggle}
          link={"/youtube"}
          title={"Youtube"}
          bg={"#f44336"}
        />
        <CardLink
          onClick={toggle}
          link={"/facebook"}
          title={"Facebook"}
          bg={"#4285F4"}
        />
        <CardLink
          onClick={toggle}
          link={"/instagram"}
          title={"Instagram"}
          bg={"#4285F4"}
        />
      </div>
    </div>
  );
};

export default Footer;
