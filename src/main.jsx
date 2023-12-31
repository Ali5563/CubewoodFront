import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "../src/router/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  </React.StrictMode>
);
