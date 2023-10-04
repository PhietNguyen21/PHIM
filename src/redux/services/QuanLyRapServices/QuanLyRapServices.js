import axios from "axios";
export const getDanhSacRap = () => {
  return axios.get(
    "https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinHeThongRap"
  );
};

export const getLichChieuTheoHeThong = () => {
  return axios.get(
    "https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00"
  );
};

export const getLayThongTinLichChieuPhim = (maPhim) => {
  return axios.get(
    `https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
  );
};
