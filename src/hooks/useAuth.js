import { useEffect, useState } from "react";

function useAuth() {
  const [authChecked, setAuthChecked] = useState(null); // null = loading, true = authenticated, false = not authenticated

  useEffect(() => {
    const checkAuth = () => {
      try {
        const auth = localStorage?.getItem("auth");
        setAuthChecked(!!auth);
      } catch {
        setAuthChecked(false);
      }
    };
    checkAuth();
  }, []);

  return authChecked;
}

export default useAuth;
