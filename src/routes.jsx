import { createBrowserRouter } from "react-router";

import PrivateLayout from "@/layouts/authentication/PrivateLayout";
import PublicLayout from "@/layouts/authentication/PublicLayout";

import Layout from "@/layouts/Layout";
import Home from "@/pages/Home";
import Billing from "@/pages/settings/Billing";
import General from "@/pages/settings/General";
import Security from "@/pages/settings/Security";
import Users from "@/pages/Users";
import Notifications from "@/pages/Notifications";
import Reports from "@/pages/Reports";

import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PrivateLayout,
    children: [
      {
        Component: Layout,
        children: [
          { index: true, Component: Home },
          { path: "users", Component: Users },
          {
            path: "settings",
            children: [
              { path: "general", Component: General },
              { path: "security", Component: Security },
              { path: "billing", Component: Billing },
            ],
          },
          { path: "reports", Component: Reports },
          { path: "notifications", Component: Notifications },
        ],
      },
    ],
  },
  {
    Component: PublicLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
  { path: "*", Component: NotFound },
]);

export default router;
