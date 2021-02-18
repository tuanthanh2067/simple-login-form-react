import { SHOW_LOADING, HIDE_LOADING } from "../constants/actionTypes";

const initialState = {
  active: false,
};

const modalReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_LOADING:
      return {
        active: true,
      };
    case HIDE_LOADING:
      return {
        active: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
