import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Features/Reducers/loginReducer";

const reducer = combineReducers({
  loginState: loginReducer,
});

const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
