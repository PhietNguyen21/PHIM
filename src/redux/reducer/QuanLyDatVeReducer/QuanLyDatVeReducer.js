const stateDefault = {
  thongTinPhongVe: {},
  danhSachGheDangDat: [
    // {
    //   maGhe: "",
    //   tenGhe: "",
    //   maRap: "",
    //   loaiGhe: "",
    //   stt: "",
    //   taiKhoanNguoiDat: "",
    //   giaVe: "",
    // },
  ],
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_THONG_TIN_PHONG_VE":
      return {
        ...state,
        thongTinPhongVe: action.thongTinPhongVe,
      };
    case "CHON_GHE": {
      const arr = [...state.danhSachGheDangDat];
      let index = arr.findIndex((item) => item.maGhe === action.ghe?.maGhe);

      //   console.log(item);
      if (index === -1) {
        arr.push(action.ghe);
      } else {
        arr.splice(index, 1);
      }

      return { ...state, danhSachGheDangDat: arr };
    }
    case "CLEAR_DANH_SACH_GHE_DANG_DAT": {
      return { ...state, danhSachGheDangDat: [] };
    }
    default:
      return { ...state };
  }
};
