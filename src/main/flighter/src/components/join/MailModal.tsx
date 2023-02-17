import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import sgMail from "@sendgrid/mail";

const MailModal = (props: any) => {
  //const

  //state
  const [isSended, setIsSended] = useState(false);

  // function
  const clickSendMail = async (email: string) => {
    fetch("/join/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: email,
    })
      .then((res) => res.text())
      .then((text) => {
        setIsSended(true);
        console.log(text);
      })
      .catch((error) => console.error(error));
  };

  //useEffect
  useEffect(() => {
    setIsSended(false);
  }, [props.show]);

  const sendBox = isSended ? (
    <>
      <div className="my-2">{props.text}</div>
      <div className="input-group my-3 w-25">
        <input
          type="text"
          className="form-control"
          placeholder="Auth"
          aria-label="Auth"
          aria-describedby="basic-addon1"
          maxLength={7}
        />
      </div>
    </>
  ) : (
    <>
      <input className="form-control my-1" value={props.email} disabled size={props.email.length} />
      <Button
        variant="danger"
        className="m-2"
        onClick={() => {
          clickSendMail(props.email);
        }}
      >
        인증메일 보내기
      </Button>
    </>
  );

  return (
    <>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{sendBox}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.toggleModalHandler}>
            인증확인
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              props.setShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MailModal;
