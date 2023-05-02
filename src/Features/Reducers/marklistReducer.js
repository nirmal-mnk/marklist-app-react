import {
  ALL_STUDENTS_PENDING,
  ALL_STUDENTS_SUCCESS,
  ALL_STUDENTS_FAIL,
} from "../Actions/ActionType";

export const marklistReducer = (
  state = { loading: true, error: false, allStudents: [] },
  action
) => {
  switch (action.type) {
    case ALL_STUDENTS_PENDING: {
      return { ...state, loading: true, error: false };
    }
    case ALL_STUDENTS_SUCCESS: {
      console.log(action);

      return {
        ...state,
        loading: false,
        allStudents: action.value,
        error: false,
      };
    }
    case ALL_STUDENTS_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
