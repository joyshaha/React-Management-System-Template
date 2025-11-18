import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

function PrivateLayout() {
  const authChecked = useAuth();

  // Wait for auth check to complete
  if (authChecked === null) {
    return null; // or a loading spinner
  }

  if (!authChecked) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default PrivateLayout;
