import styled from "styled-components";
import CheckBox from "../utils/CheckBox";
import SearchDrop from "./SearchDrop";
import SearchList from "./SearchList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft, faUser, faChild, faBaby } from "@fortawesome/free-solid-svg-icons";
import { textShaking, fadeOut } from "../styles/AnimationStyles";
import Calendar from "../utils/Calendar";
import SearchGroup from "./SearchGroup";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import DepartureBtn from "./DepartureBtn";

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .search__container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1000px;
    border-radius: 10px;
    background: #ff385c99;
  }
  .form-check-input {
    bor &:active {
      background-color: var(--color-r-m);
      border-color: var(--color-r-m);
    }
    &:checked {
      background-color: var(--color-r-m);
      border-color: var(--color-r-m);
    }
    &:focus {
      box-shadow: var(--color-r-m);
      border-color: var(--color-r-m);
    }
  }
  .check__container {
    display: flex;
    align-items: center;
    .emptyBox {
      width: 5%;
    }
    .check__port {
      margin: 10px 10px 10px auto;
      .btn {
        margin-left: 7.5px;
      }
      .btn-secondary {
        background-color: white;
        color: black;
        border: none;
      }
      .btn-check:checked + .btn {
        background-color: var(--color-r-m);
        color: white;
      }
    }
  }
  .destination__container {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .fa-arrow-right-arrow-left {
      color: pink;
      cursor: pointer;
      &:hover {
        animation: 1s infinite ${textShaking};
      }
    }
  }

  .calendar_container {
    display: flex;

    .react-datepicker-popper[data-placement^="bottom"] {
      padding-top: 15px;
    }

    .react-datepicker-wrapper {
      display: flex;
      align-items: center;
    }
    .react-datepicker__input-container {
      input {
        border: 0.5px solid grey;
        outline: none;
        border-radius: 5px;
        padding: 5px 0px;
        text-align: center;
        width: 60%;
        min-width: 100px;
        &:hover {
          background-color: #ff385c99;
          cursor: pointer;
          transition: 0.2s all;
        }
      }
    }
    .calendar__text {
      color: white;
      white-space: nowrap;
      padding: 10px;
      margin-left: 5%;
      &:last-of-type {
        margin-left: 10%;
      }
    }
    @media screen and (max-width: 430px) {
      width: 27%;
      margin-left: 0;
      .calendar__text {
        margin-left: 0;
      }
    }
  }

  .react-datepicker__tab-loop {
    .react-datepicker__day--selected {
      background-color: pink;
    }
    .react-datepicker__triangle {
      display: none;
    }
    .react-datepicker__month-container {
      animation: 1s ${fadeOut};
    }
  }
  .SearchItem__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    .SearchList__container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      .list-group {
        width: 80%;
        min-width: 300px;
        display: flex;
        justify-content: center;
        margin: 10px 0;
        .list-group-item {
          &:hover {
            background-color: #ff385c99;
            cursor: pointer;
            transition: 0.2s all;
          }
          .svg-inline--fa {
            margin-right: 5px;
          }
        }
      }
    }
    .SearchGroup__container {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      .list-group {
        width: 80%;
        .rounded-pill:first-of-type {
          cursor: pointer;
        }
      }
      .bg-primary {
        background-color: pink;
      }
      .badge:last-of-type {
        width: 30px;
      }
    }
    @media screen and (max-width: 992px) {
      display: block;
      .SearchList__container {
        width: 100%;
      }
      .SearchGroup__container {
        width: 100%;
        .list-group {
          max-width: 400px;
        }
      }
    }
  }

  .departure {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    .departure__btn {
      border: none;
      border-radius: 10px;
      color: var(--color-r-m);
      background-color: white;
    }
  }
`;

function SearchBox() {
  const isMobile = useMediaQuery({
    query: "(max-width:500px)",
  });

  const [adult, setAdult] = useState(0);
  const [youth, setYouth] = useState(0);
  const [child, setChild] = useState(0);

  const changeTicketHandler = (value: any) => {
    if (value === undefined) return;
    setAdult(value[0]);
    setYouth(value[1]);
    setChild(value[2]);
  };

  const clickResetButton = (event: any) => {
    const userType = event.currentTarget.id;
    switch (userType) {
      case "adult":
        setAdult(0);
        break;
      case "youth":
        setYouth(0);
        break;
      case "child":
        setChild(0);
    }
  };

  const [seatType, setSeatType] = useState("economy");

  const checkSeatTypeHandler = (type: any) => {
    setSeatType(type);
  };

  return (
    <SearchWrap>
      <div className="search__container">
        <div className="check__container">
          <div className="emptyBox"></div>
          <CheckBox text="편도" id={"oneWay"} />
          <CheckBox text="왕복" checked={true} id={"twoWay"} />
          <div className="check__port">
            <input type="radio" className="btn-check" name="airType" id="domestic" autoComplete="off" defaultChecked />
            <label className="btn btn-secondary" htmlFor="domestic">
              국내선
            </label>
            <input type="radio" className="btn-check" name="airType" id="international" autoComplete="off" />
            <label className="btn btn-secondary" htmlFor="international">
              국제선
            </label>
          </div>
        </div>

        <div className="destination__container">
          <SearchDrop text="출발지" isBlock="false" item={[{ city: "서울" }, { city: "부산" }]} inputId={"departure"} />
          <FontAwesomeIcon icon={faArrowRightArrowLeft} size="2x" />
          <SearchDrop
            text="도착지"
            isBlock="false"
            item={[{ city: "서울" }, { city: "제주" }]}
            inputId={"destination"}
          />
        </div>
        <div className="calendar_container">
          <div className="calendar__text">가는날</div>
          <Calendar id={"startDate"} date={0} />
          <span className="calendar__text">오는날</span>
          <Calendar id={"endDate"} date={1} />
        </div>
        <div className="SearchItem__container">
          <div className="SearchList__container">
            <SearchList
              item={[
                { content: "성인", image: faUser, count: { adult } },
                { content: "청소년", image: faChild, count: { youth } },
                { content: "유아", image: faBaby, count: { child } },
              ]}
              onChangeTicket={changeTicketHandler}
            />
            <SearchList
              checkBtn={true}
              item={
                isMobile
                  ? [{ content: "이코노미" }, { content: "비즈니스" }, { content: "퍼스트" }]
                  : [{ content: "이코노미 클래스" }, { content: "비즈니스 클래스" }, { content: "퍼스트 클래스" }]
              }
              checkSeatTypeHandler={checkSeatTypeHandler}
            />
            <input hidden defaultValue={seatType} id="seat-type" />
          </div>
          <div className="SearchGroup__container">
            <SearchGroup adult={adult} youth={youth} child={child} clickResetButton={clickResetButton}></SearchGroup>
          </div>
        </div>
        <DepartureBtn />
      </div>
    </SearchWrap>
  );
}

export default SearchBox;
