import axios from "axios";
export const getLayDanhSachBanner = () => {
  return axios.get(
    "https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner"
  );
};
