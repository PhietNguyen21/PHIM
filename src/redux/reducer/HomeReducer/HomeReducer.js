const initState = {
  arrDanhSachPhim: [],
  arrDanhSachRap: [],
  arrLichChieu: [],
};

export const HomeReducer = (state = initState, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM":
      return {
        ...state,
        arrDanhSachPhim: action.danhSachPhim,
      };
    case "LAY_DANH_SACH_RAP":
      //   console.log(action);
      return {
        ...state,
        arrDanhSachRap: action.danhSachRap,
      };
    case "LAY_DANH_SACH_LICH_CHIEU":
      return {
        ...state,
        arrLichChieu: action.arrLichChieu,
      };
    default: {
      return { ...state };
    }
  }
};
