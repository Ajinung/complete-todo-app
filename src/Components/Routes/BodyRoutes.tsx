import React from "react";
import { useRoutes } from "react-router-dom";
import Assigned from "../Body/Assigned";
import Important from "../Body/Important";
import MyDay from "../Body/MyDay";
import Planned from "../Body/Planned";
import Tasks from "../Body/Tasks";

const BodyRoutes: React.FC = () => {
  const element = useRoutes([
    {
      path: "/tasks",

      children: [
        {
          index: true,
          element: <MyDay />,
        },
        {
          path: "important",
          element: <Important />,
        },
        {
          path: "planned",
          element: <Planned />,
        },
        {
          path: "assigned_to_me",
          element: <Assigned />,
        },
        {
          path: "inbox",
          element: <Tasks />,
        },
      ],
    },
  ]);

  return element;
};

export default BodyRoutes;
