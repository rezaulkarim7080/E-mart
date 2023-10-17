import React from "react";
import { Link } from "react-router-dom";

const UserOrders = () => {
  return (
    <div className="px-5">
      <h1 className="text-4xl font-bold text-center py-2">User Panal</h1>
      <div className="grid grid-cols-5 gap-5">
        {/* part-1 navbar */}
        <div>
          <ul className="flex flex-col justify-center items-center bg-slate-100">
            <Link to={"/userdashboard"}>
              <li className="p-4 hover:text-[#ff5a33] ">profile</li>
            </Link>
            <Link to={"/userdashboard/orders"}>
              <li className="p-4 hover:text-[#ff5a33] ">Orders</li>
            </Link>
          </ul>
        </div>

        {/* part-2  */}

        <div className="col-span-4 bg-orange-200">
          <h1>Thi is order page</h1>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
