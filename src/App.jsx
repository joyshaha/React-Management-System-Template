import "./App.css";
import { RouterProvider } from "react-router";
import router from "@/routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      router.navigate("/");
    }
  }, []);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
