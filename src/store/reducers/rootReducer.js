import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import examReducer from "./examReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  exam: examReducer,
});

export default rootReducer;
