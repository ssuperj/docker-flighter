import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const ModalWrap = styled.div`
  .btn__modal {
    cursor: pointer;
    &:hover {
      color: var(--color-l-m);
    }
  }
`;

function ModalParam(props: any) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const EMAIL = "poqwer95@naver.com";
  const copyText = () => navigator.clipboard.writeText(EMAIL);
  const handleClose = () => {
    setShow(false);
    copyText();
  };

  return (
    <ModalWrap>
      <div onClick={handleShow} className="btn__modal">
        {props.render()}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.content}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            style={{ backgroundColor: "var(--color-l-m)", border: "none" }}
            onClick={handleClose}
          >
            {props.btnContent}
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalWrap>
  );
}

export default ModalParam;
