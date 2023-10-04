import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";
import { getLayDanhSachBannerAction } from "../../../../redux/actions/HomeCarousleAction/HomeCarouselAction";
import "./HomeCarousle.css";
const HomeCarousel = () => {
  const dispatch = useDispatch();
  const mangBg = useSelector((state) => state.HomeCarouselReducer.arrBg);
  useEffect(() => {
    //1 . type:'sdsad'  payload:sda
    // 2. function
    dispatch(getLayDanhSachBannerAction());
  }, []);

  return (
    <div className="div-carousel pt-24">
      <Carousel effect="fade">
        {mangBg.map((item, index) => {
          const contentStyle = {
            height: "700px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            backgroundImage: `url(${item.hinhAnh})`,
            backgroundPosition: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          };
          return (
            <div key={index}>
              <h3 style={contentStyle}>
                {/* <img src={item.hinhAnh} alt="" /> */}
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
