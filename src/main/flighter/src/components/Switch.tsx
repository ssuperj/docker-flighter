import Form from "react-bootstrap/Form";

function Switch() {
  return (
    <Form>
      <Form.Check disabled type="switch" label="disabled switch" id="disabled-custom-switch" />
    </Form>
  );
}

export default Switch;
