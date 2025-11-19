import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router";

function UserMenu({ desktop }) {
  const navigate = useNavigate();
  // handle profile
  const handleProfile = () => {
    navigate("/profile");
  };
  // handle logout
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className={`${desktop ? "hidden md:flex" : "flex flex-col"} gap-2`}>
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer ${
          location.pathname === "/profile"
            ? "bg-teal-200 dark:bg-teal-700 dark:text-white text-black"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
        onClick={handleProfile}
        aria-pressed={location.pathname === "/profile"}
      >
        <User className="w-5 h-5" /> <span>Profile</span>
      </div>
      <div
        className="flex items-center gap- px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer text-red-600"
        onClick={handleLogout}
      >
        <LogOut className="w-5 h-5" /> <span>Logout</span>
      </div>
    </div>
  );
}

export default UserMenu;
