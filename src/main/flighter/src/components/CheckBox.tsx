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
const clickWayBtn = (event: any) => {
  const endDate: any = document.querySelector("#endDate");
  const endDateText: any = document.querySelectorAll(".calendar__text")[1];
  if (event.currentTarget.id === "oneWay") {
    endDate.style.visibility = "hidden";
    endDateText.style.visibility = "hidden";
  } else {
    endDate.style = "";
    endDateText.style = "";
  }
};

function CheckBox(props: any) {
  return (
    <Wrapper>
      <div className="form-check">
        {props.checked ? (
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={props.id}
            defaultChecked
            onClick={clickWayBtn}
          />
        ) : (
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={props.id}
            onClick={clickWayBtn}
          />
        )}
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {props.text}
        </label>
      </div>
    </Wrapper>
  );
}

export default CheckBox;
