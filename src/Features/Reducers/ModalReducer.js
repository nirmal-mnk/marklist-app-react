import {
  OPEN_PROFILE_MODAL,
  CLOSE_PROFILE_MODAL,
  OPEN_SUCCESS_MODAL,
  CLOSE_SUCCESS_MODAL,
} from "../Actions/ActionType";

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

export const successModalReducer = (
  state = { toggleSuccessModal: false, successData: [] },
  action
) => {
  switch (action.type) {
    case OPEN_SUCCESS_MODAL: {
      return { ...state, toggleSuccessModal: true };
    }
    case CLOSE_SUCCESS_MODAL: {
      return { ...state, toggleSuccessModal: false };
    }
    default:
      return state;
  }
};
