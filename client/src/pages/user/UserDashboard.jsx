import React from "react";

import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  if (!user || !isAuthenticated) {
    return <Navigate to="/" />;
  }
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
          <h1 className="py-1 text-2xl font-semibold px-5">{user.role}</h1>
          <h1 className="py-1 text-2xl font-semibold px-5">{user.name}</h1>
          <h1 className="py-1 text-2xl font-semibold px-5">{user.email}</h1>
          <h1 className="py-1 text-2xl font-semibold px-5">
            {String(user.createdAt).substr(0, 10)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
