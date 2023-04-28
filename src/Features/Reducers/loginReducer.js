export const LOGIN_ROLE = "loginRole";
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
