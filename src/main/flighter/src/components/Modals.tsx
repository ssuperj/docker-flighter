import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modals(props: any) {
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggleModalHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
