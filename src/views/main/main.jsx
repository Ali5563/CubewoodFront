import React from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import { Outlet } from "react-router-dom";

const main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default main;
