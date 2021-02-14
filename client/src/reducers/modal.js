import { SHOW_MODAL, HIDE_MODAL } from "../constants/actionTypes";

const initialState = {
  message: null,
  active: false,
};

const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        message: payload,
        active: true,
      };
    case HIDE_MODAL:
      return {
        message: null,
        active: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
