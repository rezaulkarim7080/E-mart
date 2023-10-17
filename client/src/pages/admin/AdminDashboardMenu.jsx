import React from "react";
import { Link } from "react-router-dom";

const AdminDashboardMenu = () => {
  return (
    <div>
      <ul className="flex flex-col justify-center items-center bg-slate-100">
        <Link to={"/admindashboard"}>
          <li className="p-4 hover:text-[#ff5a33] ">Admin</li>
        </Link>
        <Link to={"/admin/products/catagory"}>
          <li className="p-4 hover:text-[#ff5a33] ">Create Catagory</li>
        </Link>
        <Link to={"/admin/products/new"}>
          <li className="p-4 hover:text-[#ff5a33]">Create Product</li>
        </Link>
        <Link to={"/admin/users"}>
          <li className="p-4 hover:text-[#ff5a33]">All Users</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminDashboardMenu;
