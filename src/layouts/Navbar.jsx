import { Sun, Moon, User, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router";

function Navbar({ dark, setDark, mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <header className="h-16 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex items-center justify-between px-4">
        <h1 className="text-xl font-semibold">Management App</h1>
        {/* <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)} // open mobile drawer
            // disabled={mobileOpen}
          >
            <Menu
              className={`w-6 h-6 transition-transform ${
                mobileOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <h1 className="text-xl font-semibold">My App</h1>
        </div> */}

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile drawer trigger moved to right */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu
              className={`w-6 h-6 transition-transform ${
                mobileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Desktop-only profile + logout */}
          <button className="hidden md:flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <User className="w-5 h-5" /> Profile
          </button>

          <button
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
