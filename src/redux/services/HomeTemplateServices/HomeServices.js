import axios from "axios";

export const getDanhSachPhim = () => {
  return axios.get(
    "https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00"
  );
};
