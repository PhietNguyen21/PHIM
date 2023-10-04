import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLayThongTinLichChieuPhimAction } from "../../redux/actions/QuanLyRapAction/QuanLyRapAction";
import moment from "moment";
import { Rate } from "antd";
const Details = () => {
  const param = useParams();
  const dispatch = useDispatch();
  //   console.log("PARAM", param);
  const { maPhim } = param;
  const { thongTinPhim } = useSelector((state) => state.QuanLyRapReducer);
  useEffect(() => {
    dispatch(getLayThongTinLichChieuPhimAction(maPhim));
  }, []);

  return (
    <div
      className="grid grid-cols-12"
      style={{ paddingTop: "200px", width: "80%", margin: "auto" }}
    >
      <div className="col-span-6 flex items-center">
        <div className="img">
          <img
            style={{ width: 150, height: 150 }}
            src={thongTinPhim.hinhAnh}
            alt={thongTinPhim.tenPhim}
          />
        </div>
        <div className="content-film ml-2">
          <p>{moment(thongTinPhim.ngayKhoiChieu).format("DD/MM/YYYY")}</p>
          <div>
            <b>{thongTinPhim.tenPhim}</b>
          </div>
          <button>MUA VE</button>
        </div>
      </div>
      <div className="col-span-6">
        <Rate allowHalf value={thongTinPhim.danhGia / 2} />
      </div>
    </div>
  );
};

export default Details;
