import { getLayDanhSachBanner } from "../../services/HomeCarouselServices/HomeCarouselServices";

export const getLayDanhSachBannerAction = () => {
  return async (dispatch) => {
    try {
      const res = await getLayDanhSachBanner();
      console.log(res);
      if (res.data.statusCode === 200) {
        dispatch({
          type: "GET_BG_CAROUSEL",
          data: res.data.content,
        });
      } else {
        console.log("THAT BAI", res.data.message);
      }
    } catch (error) {
      console.log("Erorr", error);
    }
  };
};
