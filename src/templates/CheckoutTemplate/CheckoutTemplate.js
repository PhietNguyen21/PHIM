import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const CheckoutTemplate = () => {
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  useEffect(() => {
    if (!localStorage.getItem("USER_LOGIN")) {
      navigate("/auth/login");
    }
  }, [navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CheckoutTemplate;
