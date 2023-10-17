import React from "react";
import { Link } from "react-router-dom";
import AdminDashboardMenu from "./AdminDashboardMenu";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  return (
    <div className="px-5">
      <h1 className="text-4xl font-bold text-center py-2">Admin Panal</h1>
      <div className="grid grid-cols-5 gap-5">
        {/* part-1 navbar */}
        <div>
          <AdminDashboardMenu />
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

export default AdminDashboard;
