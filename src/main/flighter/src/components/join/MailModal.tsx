import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

const MailModal = (props: any) => {
  //variable

  //state
  const [isSended, setIsSended] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [serverStr, setServerStr] = useState("");

  // function
  const clickSendMail = async (email: string) => {
    fetch("/api/join/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: email,
    })
      .then((res) => res.text())
      .then((text) => {
        setIsSended(true);
        setServerStr(text);
      })
      .catch((error) => console.error(error));
  };

  const compareAuthStr = () => {
    setTimeout(() => {
      const userStrElement = document.querySelector("#user-str") as HTMLInputElement;
      const userStr = userStrElement.value;
      setIsAuth(userStr === serverStr);
    }, 100);
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
          id="user-str"
          onKeyDown={compareAuthStr}
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
          <Button
            variant="danger"
            disabled={!isAuth}
            onClick={() => {
              props.setShow(false);
              props.setEmailMessage("이메일 인증 확인했습니다.");
              props.setIsAuthEmail(true);
            }}
          >
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
