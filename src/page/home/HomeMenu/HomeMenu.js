import React, { useState } from "react";
import { Radio, Space, Tabs } from "antd";
import _ from "lodash";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const HomeMenu = ({ arrLichChieu }) => {
  console.log({ arrLichChieu });
  const navigate = useNavigate();
  return (
    <>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        HOME MENU:
      </Space>
      <Tabs
        tabPosition={"left"}
        items={arrLichChieu?.map((item, index) => {
          const id = String(index + 1);
          return {
            label: (
              <img src={item.logo} style={{ width: 50, height: 50 }} alt="" />
            ),
            key: id,
            children: (
              <Tabs
                tabPosition={"left"}
                items={item.lstCumRap?.map((cumRap, index) => {
                  const id = String(index + 1);
                  return {
                    label: (
                      <img
                        src={cumRap.hinhAnh}
                        style={{ width: 50, height: 50 }}
                        alt=""
                      />
                    ),
                    key: id,
                    children: (
                      <>
                        {cumRap.danhSachPhim
                          ?.slice(0, 10)
                          .map((phim, index) => {
                            console.log("PHIM", phim);
                            const arrNgayGioChieu = _.map(
                              phim.lstLichChieuTheoPhim,
                              (item) => {
                                return _.pick(
                                  item,
                                  "ngayChieuGioChieu",
                                  "maLichChieu"
                                );
                              }
                            );
                            // console.log("ARR Ngay gio chieu", arrNgayGioChieu);
                            return (
                              <>
                                <div className="mb-2 flex items-center">
                                  <img
                                    style={{ width: 50, height: 50 }}
                                    src={phim.hinhAnh}
                                    alt=""
                                  />
                                  <div>{phim.tenPhim}</div>
                                </div>
                                {arrNgayGioChieu
                                  .slice(0, 10)
                                  .map((item, index) => {
                                    // console.log("ngayChieu", item);
                                    return (
                                      <button
                                        style={{ border: "1px solid green" }}
                                        className="border-green-400 mr-2 mb-2"
                                        key={index}
                                        onClick={() => {
                                          navigate(
                                            `/datVe/${item.maLichChieu}`
                                          );
                                        }}
                                      >
                                        {moment(item.ngayChieuGioChieu).format(
                                          "hh:mm A"
                                        )}
                                      </button>
                                    );
                                  })}
                              </>
                            );
                          })}
                      </>
                    ),
                  };
                })}
              />
            ),
          };
        })}
      />
    </>
  );
};
export default HomeMenu;
