import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Food, Tour, Chat, Health, News, School } from "./routes";

import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/tour",
    element: <Tour />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/health",
    element: <Health />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/school",
    element: <School />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
