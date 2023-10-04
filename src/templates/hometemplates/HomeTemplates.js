import React from "react";
import Header from "./layout/Header";
import HomeCarousel from "./layout/homecarousel/HomeCarousel";
import { Outlet } from "react-router-dom";
import Footer from "../hometemplates/layout/Footer";

const HomeTemplates = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default HomeTemplates;
