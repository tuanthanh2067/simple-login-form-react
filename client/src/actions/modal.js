import { SHOW_MODAL, HIDE_MODAL } from "../constants/actionTypes";

export const showModal = (message) => ({
  type: SHOW_MODAL,
  payload: message,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
