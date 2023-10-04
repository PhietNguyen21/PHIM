const initState = {
  arrBg: [],
};

export const HomeCarouselReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_BG_CAROUSEL": {
      return {
        ...state,
        arrBg: action.data,
      };
    }
    default: {
      return { ...state };
    }
  }
};
