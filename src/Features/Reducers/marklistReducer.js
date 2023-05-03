import {
  ALL_STUDENTS_PENDING,
  ALL_STUDENTS_SUCCESS,
  ALL_STUDENTS_FAIL,
  SEARCH_NAME_PENDING,
  SEARCH_NAME_SUCCESS,
  SEARCH_NAME_FAIL,
  OVERVIEW_PENDING,
  OVERVIEW_SUCCESS,
  OVERVIEW_FAIL,
} from "../Actions/ActionType";

export const marklistReducer = (
  state = { loading: true, error: "", allStudents: [] },
  action
) => {
  switch (action.type) {
    case ALL_STUDENTS_PENDING: {
      return { ...state, loading: true, error: "" };
    }
    case ALL_STUDENTS_SUCCESS: {
      console.log(action);

      return {
        ...state,
        loading: false,
        allStudents: action.value,
        error: "",
      };
    }
    case ALL_STUDENTS_FAIL: {
      console.log(action.value);

      return {
        ...state,
        loading: false,
        error: action.value,
      };
    }
    default:
      return state;
  }
};
export const searchByNameReducer = (
  state = { loading: true, error: "", searchedStudent: [] },
  action
) => {
  switch (action.type) {
    case SEARCH_NAME_PENDING: {
      return { ...state, loading: true, error: "" };
    }
    case SEARCH_NAME_SUCCESS: {
      return {
        ...state,
        loading: false,
        searchedStudent: action.value,
        error: "",
      };
    }
    case SEARCH_NAME_FAIL: {
      return { ...state, loading: false, error: action.value };
    }
    default:
      return state;
  }
};
export const overviewReducer = (
  state = { loading: false, error: "", overviewData: [] },
  action
) => {
  switch (action.type) {
    case OVERVIEW_PENDING: {
      return { ...state, loading: true, error: "" };
    }
    case OVERVIEW_SUCCESS: {
      console.log(action.value);

      return {
        ...state,
        loading: false,
        overviewData: action.value,
        error: "",
      };
    }
    case OVERVIEW_FAIL: {
      return { ...state, loading: false, error: action.value };
    }
    default:
      return state;
  }
};
