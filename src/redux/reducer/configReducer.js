import { combineReducers } from "redux";
import { HomeCarouselReducer } from "./HomeCarouselReducer/HomeCarouselReducer";
import { HomeReducer } from "./HomeReducer/HomeReducer";
import { QuanLyRapReducer } from "./QuanLyRapReducer/QuanLyRapReducer";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";
import { QuanLyDatVeReducer } from "./QuanLyDatVeReducer/QuanLyDatVeReducer";

const rootReducer = combineReducers({
  HomeCarouselReducer: HomeCarouselReducer,
  HomeReducer: HomeReducer,
  QuanLyRapReducer: QuanLyRapReducer,
  QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
  QuanLyDatVeReducer: QuanLyDatVeReducer,
});

export default rootReducer;
