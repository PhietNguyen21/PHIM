import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import contentStyle from "./MutipleRows.module.css";
import Film from "../Phim/Film";
const MultipleRows = ({ arrDanhSachPhim }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${contentStyle["slick-next"]}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${contentStyle["slick-prev"]}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center slider varialbe-width ",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    dots: false,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderListFilm = () => {
    return arrDanhSachPhim.slice(0, 12).map((item, index) => {
      return (
        <Fragment key={index}>
          <Film film={item} />
        </Fragment>
      );
    });
  };
  return (
    <div>
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {renderListFilm()}
        {renderListFilm()}
      </Slider>
    </div>
  );
};

export default MultipleRows;
