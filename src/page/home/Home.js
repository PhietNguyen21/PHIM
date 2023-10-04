import React, { useEffect } from "react";
import MultipleRows from "../../component/MutipleRows/MultipleRows";
import { useDispatch, useSelector } from "react-redux";
import {
  getDanhSachPhimAction,
  getDanhSachRapActions,
  getLichChieuTheoHeThongAction,
} from "../../redux/actions/HomeActions/HomeActions";
import HomeMenu from "./HomeMenu/HomeMenu";
import HomeCarousel from "../../templates/hometemplates/layout/homecarousel/HomeCarousel";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDanhSachPhimAction());

    dispatch(getLichChieuTheoHeThongAction());
  }, []);

  const { arrDanhSachPhim, arrDanhSachRap, arrLichChieu } = useSelector(
    (state) => state.HomeReducer
  );

  return (
    <>
      <HomeCarousel />
      <div className="Home mt-5">
        <div className="flex justify-center">
          <button className="btn btn-success mr-2">Dang chieu</button>
          <button className="btn btn-success">Dang chieu</button>
        </div>
        <div className="mutipleRow">
          <MultipleRows arrDanhSachPhim={arrDanhSachPhim} />
        </div>
        <div className="Home-menu">
          <HomeMenu arrLichChieu={arrLichChieu} />
        </div>
      </div>
    </>
  );
};

export default Home;
