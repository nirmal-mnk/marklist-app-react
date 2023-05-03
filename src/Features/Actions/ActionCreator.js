import axios from "axios";
import * as actionType from "./ActionType";

// const apibaseurl = process.env.REACT_API_URL;
// const API_SINGLE_STUDENT = process.env.REACT_API_SINGLE_STUDENT;
// const API_SEARCH_STUDENT = process.env.REACT_API_SEARCH_STUDENT;
// const API_CREATE_NEW_RECORD = process.env.REACT_API_CREATE_NEW_RECORD;
// const API_UPDATE_RECORD = process.env.REACT_API_UPDATE_RECORD;
// const API_DELETE_RECORD = process.env.REACT_API_DELETE_RECORD;
// const API_STUDENT_OVERVIEW = process.env.REACT_API_STUDENT_OVERVIEW;

export const getAllStudents = () => {
  return async (dispatch) => {
    dispatch({
      type: actionType.ALL_STUDENTS_PENDING,
    });
    try {
      const res = await axios.get("http://api-task.devdews.com/student");
      const data = res.data;
      dispatch({
        type: actionType.ALL_STUDENTS_SUCCESS,
        value: data,
      });
    } catch (err) {
      dispatch({
        type: actionType.ALL_STUDENTS_FAIL,
        value: err.message,
      });
    }
  };
};

export const searchStudentByName = (searchedval) => {
  return async (dispatch) => {
    dispatch({
      type: actionType.SEARCH_NAME_PENDING,
    });

    try {
      const res = await axios.get(
        `http://api-task.devdews.com/student/search/${searchedval}`
      );
      const data = res.data;
      dispatch({
        type: actionType.SEARCH_NAME_SUCCESS,
        value: data,
      });
    } catch (err) {
      dispatch({
        type: actionType.SEARCH_NAME_FAIL,
        value: err.message,
      });
    }
  };
};

export const getOverviewData = () => {
  return async (dispatch) => {
    dispatch({
      type: actionType.OVERVIEW_PENDING,
    });
    try {
      const res = await axios.get(
        `http://api-task.devdews.com/student/overview`
      );
      const data = res.data;
      console.log(data);
      dispatch({
        type: actionType.OVERVIEW_SUCCESS,
        value: data,
      });
    } catch (err) {
      dispatch({
        type: actionType.OVERVIEW_FAIL,
        value: err.message,
      });
    }
  };
};
