const stateDefault = {
  thongTinPhim: {},
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_THONG_TIN_PHIM":
      return {
        ...state,
        thongTinPhim: action.thongTinPhim,
      };

    default:
      return { ...state };
  }
};
