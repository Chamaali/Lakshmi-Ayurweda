"use client";

import AdminNav from "./adminNavigationBar/AdminNav";

// import AdminNav from "../components/admin/AdminNav";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-teal-100">
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
