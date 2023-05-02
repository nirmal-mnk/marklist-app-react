import axios from "axios";
import * as actionType from "./ActionType";

export const pendingAction = (data) => {
  return {
    type: actionType.ALL_STUDENTS_PENDING,
    value: data,
  };
};
export const successAction = (data) => {
  return {
    type: actionType.ALL_STUDENTS_SUCCESS,
    value: data,
  };
};
export const failAction = (data) => {
  return {
    type: actionType.ALL_STUDENTS_FAIL,
    value: data,
  };
};

export const getAllStudents = () => {
  return async (dispatch) => {
    dispatch(pendingAction(false));
    try {
      const res = await axios.get("http://api-task.devdews.com/student");
      const data = res.data;
      console.log(data);

      dispatch(successAction(data));
    } catch (err) {
      dispatch(failAction(err));
    }
  };
};
