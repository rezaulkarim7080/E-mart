import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="text-center items-center">
      <h1 className="text-3xl text-center mt-10 font-bold text-green-600">
        Order Successfull
      </h1>
      <Link
        to={"/"}
        className="w-[30%] px-3 py-2 bg-[#ffb30d] border hover:border-black hover:border-[2px] rounded-md text-black "
      >
        go to Home
      </Link>
    </div>
  );
};

export default Success;
