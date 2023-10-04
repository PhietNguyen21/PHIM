import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeTemplates from "./templates/hometemplates/HomeTemplates";
import News from "./page/news/News";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import Details from "./page/Details/Details";
import Login from "./templates/AuthTemplate/layout/Login";
import Register from "./templates/AuthTemplate/layout/Register";
import AuthTemplate from "./templates/AuthTemplate/AuthTemplate";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./templates/CheckoutTemplate/layout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeTemplates />}>
        <Route element={<Home />} index />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/detail/:maPhim" element={<Details />} />
      </Route>

      <Route path="/auth" element={<AuthTemplate />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/datVe" element={<CheckoutTemplate />}>
        <Route path=":id" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
