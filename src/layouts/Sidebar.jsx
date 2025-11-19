import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserMenu from "@/components/UserMenu";
import {
  BarChart,
  Bell,
  ChevronDown,
  CreditCard,
  Gem,
  Home,
  Menu,
  Settings,
  Shield,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import Menubar from "./Menubar";

function Sidebar({
  open,
  setOpen,
  mobileOpen,
  setMobileOpen,
  submenuOpen,
  setSubmenuOpen,
}) {
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Users", icon: Users, path: "/users" },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings/general",
      children: [
        { name: "General", icon: Gem, path: "/settings/general" },
        { name: "Security", icon: Shield, path: "/settings/security" },
        { name: "Billing", icon: CreditCard, path: "/settings/billing" },
      ],
    },
    { name: "Reports", icon: BarChart, path: "/reports" },
    { name: "Notifications", icon: Bell, path: "/notifications" },
  ];

  //   const renderMenu = (item) => {
  //     console.log(item);
  //     return (
  //       <div key={item.name}>
  //         <Link to={item.path}>
  //           <div
  //             className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer justify-between"
  //             onClick={() => item.children && setSubmenuOpen(!submenuOpen)}
  //           >
  //             <div className="flex items-center gap-2">
  //               <item.icon className="w-5 h-5" />
  //               {open && <span>{item.name}</span>}
  //             </div>

  //             {open && item.children && (
  //               <ChevronDown
  //                 className={`w-4 h-4 transition-transform ${
  //                   submenuOpen ? "rotate-180" : ""
  //                 }`}
  //               />
  //             )}
  //           </div>

  //           {item.children && submenuOpen && (
  //             <div
  //               className={`space-y-1 ${open ? "ml-10 mt-1" : "ml-1 mt-0 py-2"}`}
  //             >
  //               {item.children.map((sub) => (
  //                 <div
  //                   key={sub.name}
  //                   className="px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
  //                 >
  //                   <Link to={sub.path} className="flex items-center gap-2">
  //                     <sub.icon className="w-4 h-4" />
  //                     {open && <span>{sub.name}</span>}
  //                   </Link>
  //                 </div>
  //               ))}
  //             </div>
  //           )}
  //         </Link>
  //       </div>
  //     );
  //   };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex transition-all duration-300 ease-in-out ${
          open ? "w-64" : "w-16"
        } bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex-col`}
      >
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setOpen(!open)}>
            <Menu
              className={`w-6 h-6 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop Sidebar Menu */}
        <nav className="flex-1 mt-4 space-y-2">
          <Menubar
            menuItems={menuItems}
            open={open}
            setSubmenuOpen={setSubmenuOpen}
            submenuOpen={submenuOpen}
          />
          {/* {menuItems.map(renderMenu)} */}
        </nav>
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden transition-opacity duration-300 ease-in-out">
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMobileOpen(false)} // close mobile drawer
          ></div>
          <aside className="w-64 bg-white dark:bg-gray-800 h-full p-4 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-2">
              {/* Mobile Sidebar Menu */}
              <Menubar
                menuItems={menuItems}
                open={open}
                setSubmenuOpen={setSubmenuOpen}
                submenuOpen={submenuOpen}
              />
              {/* {menuItems.map(renderMenu)} */}
              {/* Profile + Logout added for mobile/tablet */}
              <div className="mt-6 border-t pt-4 space-y-2 dark:border-gray-700">
                {/* profile + logout */}
                <UserMenu />
              </div>
            </nav>
          </aside>
        </div>
      )}
      {/* Mobile Drawer using Shadcn Sheet */}
      {/* {mobileOpen && (
        <MobileMenuShadcn
          menuItems={menuItems}
          setSubmenuOpen={setSubmenuOpen}
          submenuOpen={submenuOpen}
          handleLogout={handleLogout}
        />
      )} */}
    </>
  );
}

export default Sidebar;

const MobileMenuShadcn = ({
  menuItems,
  setSubmenuOpen,
  submenuOpen,
  handleLogout,
}) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [activeSub, setActiveSub] = useState("");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden absolute top-4 right-4 z-50"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-4">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
        </SheetHeader>

        <nav className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer justify-between ${
                  activeItem === item.name
                    ? "bg-gray-300 dark:bg-gray-700"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => {
                  setActiveItem(item.name);
                  item.children && setSubmenuOpen(!submenuOpen);
                }}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
                {item.children && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      submenuOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.children && submenuOpen && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.children.map((sub) => (
                    <div
                      key={sub.name}
                      className={`px-3 py-1 text-sm rounded cursor-pointer ${
                        activeSub === sub.name
                          ? "bg-gray-300 dark:bg-gray-700"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => setActiveSub(sub.name)}
                    >
                      {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Profile + Logout placed into drawer for mobile/tablet */}
          <div className="mt-6 border-t pt-4 space-y-2 dark:border-gray-700">
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <User className="w-5 h-5" /> <span>Profile</span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer text-red-600"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" /> <span>Logout</span>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
