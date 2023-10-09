import React from "react";
import headerLogo from "../../assets/images/png-ads.png";
import { Link, useLocation } from "react-router-dom";
import toCamelCase from "../../helper";


const Header = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    document.title = "Home";
  } else {
    const title = toCamelCase(location.pathname.split("/").pop());
    document.title = title;
  }
  return (
    <div className="w-[100%] h-[10%]">
      {/* Mobile */}
      <div className="w-[100%] h-[100%] bg-white flex items-center justify-between px-5 sm:hidden">
        <div className="branding flex items-center">
          <img src={headerLogo} alt="headerLogo" className="w-[50px]" />
        </div>
        <div className="links flex items-center">
          <box-icon name="menu"></box-icon>
        </div>
      </div>
      {/*  */}
      <div className="hidden w-[100%] h-[100%] bg-white sm:flex items-center justify-between px-5">
        <div className="branding flex items-center">
          <img
            src={headerLogo}
            alt="headerLogo"
            className="w-[50px] md:w-[50px] lg:w-[60px]"
          />
        </div>
        <div className="flex items-center gap-5 justify-center">
          <Link
            to={"/"}
            className={`anchor ${
              location.pathname === "/" ? "text-purple-600 active" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to={"/services"}
            className={`anchor ${
              location.pathname === "/services" ? "text-purple-600 active" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to={"/custom"}
            className={`anchor ${
              location.pathname === "/custom" ? "text-purple-600 active" : ""
            }`}
          >
            History
          </Link>
          <Link
            to={"/orders"}
            className={`anchor ${
              location.pathname === "/orders" ? "text-purple-600 active" : ""
            }`}
          >
            Orders
          </Link>
          <Link
            to={"/about"}
            className={`anchor ${
              location.pathname === "/about" ? "text-purple-600 active" : ""
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
