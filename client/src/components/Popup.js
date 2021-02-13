import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Popup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>
  );
};

export default Popup;
