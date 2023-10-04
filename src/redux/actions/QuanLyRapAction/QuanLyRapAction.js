import { getLayThongTinLichChieuPhim } from "../../services/QuanLyRapServices/QuanLyRapServices";

export const getLayThongTinLichChieuPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await getLayThongTinLichChieuPhim(maPhim);
      if (res && res.data.statusCode === 200) {
        dispatch({
          type: "LAY_THONG_TIN_PHIM",
          thongTinPhim: res.data.content,
        });
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log("ERR", error);
    }
  };
};
