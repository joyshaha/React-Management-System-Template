import React from "react";
import { Outlet } from "react-router";

function MainBodyArea() {
  return (
    <main className="p-4">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <Outlet />
      </div>
    </main>
  );
}

export default MainBodyArea;
