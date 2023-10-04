import {
  getLayDanhSachPhongVe,
  postDatVe,
} from "../../services/QuanLyDatVeService/QuanLyDatVeSerivice";

export const getLayDanhSachPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const res = await getLayDanhSachPhongVe(maLichChieu);
      if (res && res.data.statusCode === 200) {
        dispatch({
          type: "LAY_THONG_TIN_PHONG_VE",
          thongTinPhongVe: res.data.content,
        });
      } else {
        console.log("ERR", res);
      }
    } catch (error) {
      console.log("LOI", error);
    }
  };
};

export const postDatVeAction = (maLichChieu, danhSachVe, accessToken) => {
  return async (dispatch) => {
    try {
      const res = await postDatVe(maLichChieu, danhSachVe, accessToken);
      if (res && res.data.statusCode === 200) {
        console.log(res);
      } else {
        console.log("LOI", res);
      }
    } catch (error) {
      console.log("ERR", error);
    }
  };
};
