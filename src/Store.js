import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Features/Reducers/loginReducer";
import {
  marklistReducer,
  searchByNameReducer,
  overviewReducer,
} from "./Features/Reducers/marklistReducer";
import { profileReducer } from "./Features/Reducers/ProfileReducer";

const reducer = combineReducers({
  loginState: loginReducer,
  allStudentsState: marklistReducer,
  profileModalState: profileReducer,
  searchNameState: searchByNameReducer,
  overviewState: overviewReducer,
});

const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
