import { counterReducer } from "./counter";
import { loggedReducer } from "./login";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counter: counterReducer,
  login: loggedReducer,
});
