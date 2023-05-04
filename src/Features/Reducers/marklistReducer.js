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
  ADD_STUDENTS_PENDING,
  ADD_STUDENTS_SUCCESS,
  ADD_STUDENTS_FAIL,
  UPDATE_STUDENTS_PENDING,
  UPDATE_STUDENTS_SUCCESS,
  UPDATE_STUDENTS_FAIL,
  CHANGE_STUDENT,
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
      return {
        ...state,
        loading: false,
        allStudents: action.value,
        error: "",
      };
    }
    case ALL_STUDENTS_FAIL: {
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

export const addNewStudentReducer = (
  state = { loading: false, error: "", studentadded: false, studentResult: [] },
  action
) => {
  switch (action.type) {
    case ADD_STUDENTS_PENDING: {
      return { ...state, loading: true, error: "" };
    }
    case ADD_STUDENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        studentadded: true,
        studentResult: action.value,
      };
    }
    case ADD_STUDENTS_FAIL: {
      return { ...state, loading: false, error: "" };
    }
    case CHANGE_STUDENT: {
      return { ...state, studentadded: false };
    }
    default:
      return state;
  }
};
export const updateStudentReducer = (
  state = {
    loading: false,
    error: "",
    studentUpdated: false,
    studentResult: [],
  },
  action
) => {
  switch (action.type) {
    case UPDATE_STUDENTS_PENDING: {
      return { ...state, loading: true, error: "" };
    }
    case UPDATE_STUDENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        studentUpdated: true,
        studentResult: action.value,
      };
    }
    case UPDATE_STUDENTS_FAIL: {
      return { ...state, loading: false, error: "" };
    }
    default:
      return state;
  }
};
export const deleteStudentReducer = (
  state = { loading: false, error: "", studentdeleted: false },
  action
) => {
  switch (action.type) {
    case ADD_STUDENTS_PENDING: {
      return { ...state, loading: true, error: "" };
    }
    case ADD_STUDENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        studentdeleted: true,
      };
    }
    case ADD_STUDENTS_FAIL: {
      return { ...state, loading: false, error: "" };
    }
    default:
      return state;
  }
};
