import React from "react";
import { useNavigate } from "react-router-dom";

const Film = ({ film }) => {
  // console.log("PHIM", film);
  const navigate = useNavigate();
  return (
    <div>
      <img src={film.hinhAnh} alt="" />
      <div>{film.tenPhim}</div>
      <button
        onClick={() => {
          navigate(`/detail/${film.maPhim}`);
        }}
      >
        Dat ve
      </button>
    </div>
  );
};

export default Film;
