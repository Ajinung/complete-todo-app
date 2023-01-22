import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Home from "../Home/Home";

const AllRoutes: React.FC = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return elements;
};

export default AllRoutes;
