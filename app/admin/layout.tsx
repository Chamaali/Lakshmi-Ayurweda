// adminLayout.tsx

// "use client";

import AdminNav from "./adminNavigationBar/AdminNav";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children} {/* Render admin page content */}
    </div>
  );
};

export default AdminLayout;
