import React from "react";
import AdminNavigationBar from "./navigationBar/AdminNavigationBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-4 bg-slate-400">
      All are in this Layout
      <AdminNavigationBar />
      {children}
    </div>
  );
}
