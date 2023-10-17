/* eslint-disable no-unused-vars */
import React from "react";
import notFound from "../../assets/images/notfound.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-[300px] md:w-[450px]"
        src={notFound}
        alt="not-found-image"
      />
      <p className="font-medium"> 404, This Route is not Exists.</p>
      <Link className="text-lg font-medium underline" to={"/"}>
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
