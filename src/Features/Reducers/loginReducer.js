export const LOGIN_ROLE = "login-role";
const userState = {};
export const loginReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN_ROLE: {
      console.log(action.toggle);
      return state;
    }
    default:
      //   console.log(action);
      return state;
  }
};

export const APP_ROLE = "app-role";
export const roleReducer = (state = { role: "" }, action) => {
  switch (action.type) {
    case APP_ROLE: {
      console.log(action.role);
      return { ...state, role: action.role };
    }
    default:
      return state;
  }
};
