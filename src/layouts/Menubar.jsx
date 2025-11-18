import React from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";

function Menubar({ menuItems, open, setSubmenuOpen, submenuOpen }) {
  return (
    <>
      {menuItems.map((item) => (
        <div key={item.name}>
          <NavLink
            to={item.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-gray-200 dark:bg-gray-700"
                : isActive
                ? "flex items-center gap-2 px-4 py-2 bg-teal-200 dark:bg-teal-700 dark:text-white text-black rounded-lg cursor-pointer justify-between"
                : "flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer justify-between"
            }
            onClick={() => item.children && setSubmenuOpen(!submenuOpen)}
          >
            <div className="flex items-center gap-2">
              <item.icon className="w-5 h-5" />
              {open && <span>{item.name}</span>}
            </div>
            {item.children && (
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  submenuOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </NavLink>

          {item.children && submenuOpen && (
            <div className={`space-y-1 ${open ? "ml-10 mt-1" : "ml-2 mt-0"}`}>
              {item.children.map((sub) => (
                <NavLink
                  to={sub.path}
                  key={sub.name}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-gray-200 dark:bg-gray-700"
                      : isActive
                      ? "flex items-center gap-2 py-2 bg-teal-200 dark:bg-teal-700 dark:text-white text-black rounded-lg cursor-pointer"
                      : "flex items-center gap-2 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                  }
                >
                  <div
                    key={sub.name}
                    className="px-3 flex items-center gap-2"
                  >
                    <sub.icon className="w-4 h-4" />
                    {open && <span>{sub.name}</span>}
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Menubar;
