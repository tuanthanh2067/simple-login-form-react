import { combineReducers } from "redux";
import authReducer from "./auth";
import modalReducer from "./modal";
import loadingReducer from "./loading";

const allReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  loading: loadingReducer,
});

export default allReducers;
