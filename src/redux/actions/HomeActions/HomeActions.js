import { getDanhSachPhim } from "../../services/HomeTemplateServices/HomeServices";
import {
  getDanhSacRap,
  getLichChieuTheoHeThong,
} from "../../services/QuanLyRapServices/QuanLyRapServices";

export const getDanhSachPhimAction = () => {
  return async (dispatch, getState) => {
    try {
      const res = await getDanhSachPhim();
      if (res.data.statusCode === 200) {
        dispatch({
          type: "LAY_DANH_SACH_PHIM",
          danhSachPhim: res.data.content,
        });
      } else {
        console.log("error", res.data.message);
      }
    } catch (error) {
      console.log("ERRR", error);
    }
  };
};

export const getDanhSachRapActions = () => {
  return async (dispatch, getState) => {
    try {
      const res = await getDanhSacRap();
      if (res.data.statusCode === 200) {
        dispatch({
          type: "LAY_DANH_SACH_RAP",
          danhSachRap: res.data.content,
        });
      } else {
        console.log("error", res.data.message);
      }
    } catch (error) {
      console.log("ERRR", error);
    }
  };
};
export const getLichChieuTheoHeThongAction = () => {
  return async (dispatch, getState) => {
    try {
      const res = await getLichChieuTheoHeThong();
      if (res.data.statusCode === 200) {
        dispatch({
          type: "LAY_DANH_SACH_LICH_CHIEU",
          arrLichChieu: res.data.content,
        });
      } else {
        console.log("error", res.data.message);
      }
    } catch (error) {
      console.log("ERRR", error);
    }
  };
};
