let userLOGIN = {};

if (localStorage.getItem("USER_LOGIN")) {
  userLOGIN = JSON.parse(localStorage.getItem("USER_LOGIN"));
}

const stateDefault = {
  userLogin: userLOGIN,
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      console.log(action);
      localStorage.setItem("USER_LOGIN", JSON.stringify(action.user));

      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.user.accessToken)
      );
      return {
        ...state,
      };
    }

    default:
      return { ...state };
  }
};
