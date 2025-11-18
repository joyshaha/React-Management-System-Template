import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainBodyArea from "./MainBodyArea";

export default function Layout() {
  const [open, setOpen] = useState(true); // sidebar
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer
  const [dark, setDark] = useState(false); // dark mode
  const [submenuOpen, setSubmenuOpen] = useState(false); // submenu

  return (
    <div
      className={`${
        dark ? "dark" : ""
      } h-screen flex bg-gray-100 dark:bg-gray-900 dark:text-gray-200`}
    >
      {/* Sidebar */}
      <Sidebar
        dark={dark}
        setDark={setDark}
        open={open}
        setOpen={setOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        submenuOpen={submenuOpen}
        setSubmenuOpen={setSubmenuOpen}
      />
      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar
          dark={dark}
          setDark={setDark}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        {/* Main Body Area */}
        <MainBodyArea />
      </div>
    </div>
  );
}
