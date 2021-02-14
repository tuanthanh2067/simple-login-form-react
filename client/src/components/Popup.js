import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";

import { HIDE_MODAL } from "../constants/actionTypes";

const Popup = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: HIDE_MODAL,
    });
  };

  return (
    <Modal
      show={modal.active}
      onHide={handleClose}
      keyboard={false}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>User notification!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modal.message}</Modal.Body>
    </Modal>
  );
};

export default Popup;
