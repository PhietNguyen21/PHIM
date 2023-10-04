import axios from "axios";

export const getLayDanhSachPhongVe = (maLichChieu) => {
  return axios.get(
    `https://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
  );
};

export const postDatVe = (maLichChieu, danhSachVe, accessToken) => {
  return axios.post(
    "https://movieapi.cyberlearn.vn/api/QuanLyDatVe/DatVe",
    {
      maLichChieu,
      danhSachVe,
    },
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};
