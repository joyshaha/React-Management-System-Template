import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold">404 Not Found</h1>
      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Button variant="outline" onClick={() => navigate("/")}>
        Go back to home
      </Button>
    </div>
  );
}

export default NotFound;
