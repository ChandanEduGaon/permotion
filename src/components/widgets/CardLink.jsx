import React from "react";
import { Link } from "react-router-dom";

const CardLink = (props) => {
  return (
    <>
      <Link to={props.link} className="active">
        <div
          className={`p-5 m-2 rounded-lg text-[#fff] text-xl font-bold min-w-[200px] max-w-[200px] text-center`}
          style={{ backgroundColor: props.bg }}
        >
          {props.title}
        </div>
      </Link>
    </>
  );
};

export default CardLink;
