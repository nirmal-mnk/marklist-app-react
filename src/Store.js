import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer, roleReducer } from "./Features/Reducers/loginReducer";
import {
  marklistReducer,
  searchByNameReducer,
  overviewReducer,
  addNewStudentReducer,
  deleteStudentReducer,
  updateStudentReducer,
} from "./Features/Reducers/MarklistReducer";
import {
  profileReducer,
  successModalReducer,
} from "./Features/Reducers/ModalReducer";

const reducer = combineReducers({
  loginState: loginReducer,
  roleState: roleReducer,
  allStudentsState: marklistReducer,
  profileModalState: profileReducer,
  searchNameState: searchByNameReducer,
  overviewState: overviewReducer,
  addNewStudentState: addNewStudentReducer,
  updateStudentState: updateStudentReducer,
  successModalState: successModalReducer,
  deleteStudentState: deleteStudentReducer,
});

const setAppRole = () => {
  const initialData = {};
  let approle = {};
  if (sessionStorage) {
    const appRoleStorage = sessionStorage.getItem("approle");
    if (appRoleStorage === "student") {
      approle = { role: "student" };
    } else {
      approle = { role: "admin" };
    }
  }
  initialData.roleState = approle;
  return initialData;
};
console.log(setAppRole());
const initialState = setAppRole();
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
