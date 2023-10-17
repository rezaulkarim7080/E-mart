import React from "react";
import AdminDashboardMenu from "./AdminDashboardMenu";

const AllUsers = () => {
  return (
    <div className="px-5">
      <h1 className="text-4xl font-bold text-center py-2">Admin Panal</h1>
      <div className="grid grid-cols-5 gap-5">
        {/* part-1 navbar */}
        <div>
          <AdminDashboardMenu />
        </div>

        {/* part-2  */}

        <div className="col-span-4 bg-orange-200 px-5">
          <h1>All users</h1>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
