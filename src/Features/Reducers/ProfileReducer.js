export const OPEN_PROFILE_MODAL = "OpenProfileModal";
export const CLOSE_PROFILE_MODAL = "CloseProfileModal";

export const profileReducer = (
  state = { toggleProfileModal: false, studentData: [] },
  action
) => {
  switch (action.type) {
    case OPEN_PROFILE_MODAL: {
      return {
        ...state,
        toggleProfileModal: true,
        studentData: action.value,
      };
    }
    case CLOSE_PROFILE_MODAL: {
      return { ...state, toggleProfileModal: false };
    }
    default:
      return state;
  }
};
