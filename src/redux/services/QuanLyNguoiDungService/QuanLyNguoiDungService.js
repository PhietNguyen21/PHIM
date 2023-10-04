import axios from "axios";

export const postDangNhap = (taiKhoan, matKhau) => {
  return axios.post(
    "https://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
    {
      taiKhoan: taiKhoan,
      matKhau: matKhau,
    }
  );
};
