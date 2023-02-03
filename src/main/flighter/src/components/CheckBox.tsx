import styled from "styled-components";

const Wrapper = styled.div`
  .form-check {
    padding: 15px 10px;
  }
  .form-check-input {
    margin-left: auto;
  }
  .form-check-label {
    color: #ffffffcc;
    font-size: 16px;
    font-weight: 700;
    margin-left: 5px;
  }
`;

function CheckBox(props: any) {
  return (
    <Wrapper>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {props.text}
        </label>
      </div>
    </Wrapper>
  );
}

export default CheckBox;
