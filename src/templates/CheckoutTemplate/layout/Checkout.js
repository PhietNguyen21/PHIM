import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getLayDanhSachPhongVeAction,
  postDatVeAction,
} from "../../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction";
import contentStyle from "./Checkout.module.css";
import _ from "lodash";

const Checkout = () => {
  const param = useParams();
  const { id } = param;
  console.log(id);
  const dispatch = useDispatch();
  const { thongTinPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log({ userLogin });
  useEffect(() => {
    dispatch(getLayDanhSachPhongVeAction(id));
  }, []);

  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const { thongTinPhim, danhSachGhe } = thongTinPhongVe;
  console.log("Danh Sach ghe", danhSachGhe);

  const { danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  //   console.log("DS GHE DANG DAT", danhSachGheDangDat);
  const arrPick = _.map(danhSachGheDangDat, (item) => {
    return _.pick(item, ["maGhe", "giaVe"]);
  });

  console.log({ arrPick });
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 " style={{ width: "90%", margin: "0 auto" }}>
        <div className="text-center">MAN HINH</div>
        <div className="listGhe mt-2 gap-6 text-center">
          {danhSachGhe?.map((item, index) => {
            let classGheThuong = "";
            let classGheVip = "";
            let classGheDaDuocDat = "";
            let gheMinhDangDat = "";
            if (item.loaiGhe === "Thuong") {
              classGheThuong = contentStyle["gheThuong"];
            }
            if (item.loaiGhe === "Vip") {
              classGheVip = contentStyle["gheVip"];
            }
            if (item.daDat === true) {
              classGheDaDuocDat = contentStyle["gheDaDat"];
            }

            let find = danhSachGheDangDat?.findIndex(
              (ghe) => ghe.maGhe === item.maGhe
            );
            if (find !== -1) {
              gheMinhDangDat = contentStyle["gheMinhDangDat"];
            }
            return (
              <>
                <button
                  disabled={item.daDat}
                  onClick={() => {
                    dispatch({
                      type: "CHON_GHE",
                      ghe: item,
                    });
                  }}
                  key={index}
                  className={`bg-green-500 text-center m-2 ${classGheThuong} ${classGheVip} ${classGheDaDuocDat} ${gheMinhDangDat}`}
                  style={{ width: 35, height: 35, display: "inline-block" }}
                >
                  {item.tenGhe}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ""}
              </>
            );
          })}
        </div>
      </div>
      <div className="col-span-4">
        <div className="border-b-2 border-green-400 text-center">
          {danhSachGheDangDat
            .reduce((total, item, index) => {
              return (total += item.giaVe);
            }, 0)
            .toLocaleString()}{" "}
          VND
        </div>
        <div className="inFo-Film border-b-2 border-green-400">
          <div>{thongTinPhim?.tenPhim}</div>
          <div>{thongTinPhim?.tenCumRap}</div>
          <div>
            {thongTinPhim?.ngayChieu} - {thongTinPhim?.tenRap}
          </div>
        </div>
        <div className="flex justify-between border-b-2 border-green-400 info-ghe">
          <div>
            GHE :{" "}
            {danhSachGheDangDat.map((item, index) => {
              return <span key={index}>{`[${item.tenGhe}]`}</span>;
            })}
          </div>
          <div className="mr-3">
            {danhSachGheDangDat
              .reduce((total, item, index) => {
                return (total += item.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </div>
        </div>
        <div className="info-NguoiDung border-b-2 border-green-400">
          <div>Name : {userLogin.hoTen}</div>
          <div>email : {userLogin.email}</div>
          <div>Sdt : {userLogin.soDT}</div>
        </div>
        <div className="text-center border-solid bg-green-600 mt-2">
          <button
            onClick={() => {
              dispatch(postDatVeAction(id, arrPick, accessToken));
              dispatch({
                type: "CLEAR_DANH_SACH_GHE_DANG_DAT",
              });
            }}
          >
            DAT VE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
