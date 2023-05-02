import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Features/Reducers/loginReducer";
import { marklistReducer } from "./Features/Reducers/marklistReducer";

const reducer = combineReducers({
  loginState: loginReducer,
  allStudentsState: marklistReducer,
});

const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
