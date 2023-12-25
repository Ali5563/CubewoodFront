import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../views/main/main";
import Home from "../views/home/home";
import About from "../views/about/about";
import Shop from "../views/shop/shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
  {},
  // { path: '/', element : }
]);

export default router;
