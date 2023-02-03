import styled from "styled-components";
import CheckBox from "./CheckBox";
import SearchDrop from "./SearchDrop";
import SearchList from "./SearchList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { textShaking, fadeOut } from "./styles/AnimationStyles";
import Calendar from "./Calendar";

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .search__container {
    display: flex;
    flex-direction: column;
    width: 90%;
    border-radius: 10px;
    background: #ff385c99;
    height: 300px;
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
    .emptyBox {
      width: 5%;
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
    .react-datepicker__input-container {
      input {
        border: 0.5px solid grey;
        outline: none;
        border-radius: 5px;
        padding: 5px 0px;
        text-align: center;
        &:hover {
          background-color: var(--color-l-m);
          transition: 1s all;
        }
      }
    }
    .calendar__text {
      padding: 10px;
      width: 150px;
      word-spacing: normal;
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

  .list-group {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .departure {
    display: flex;
    justify-content: center;
    margin: 30px;
    .departure__btn {
      border: none;
      border-radius: 10px;
      color: var(--color-r-m);
      background-color: white;
    }
  }
`;

function SearchBox() {
  return (
    <SearchWrap>
      <div className="search__container">
        <div className="check__container">
          <div className="emptyBox"></div>
          <CheckBox text="편도" />
          <CheckBox text="왕복" />
        </div>
        <div className="destination__container">
          <SearchDrop
            text="출발지"
            isBlock="false"
            item={[
              { title: "서울", link: "" },
              { title: "부산", link: "" },
            ]}
          />
          <FontAwesomeIcon icon={faArrowRightArrowLeft} size="2x" />
          <SearchDrop
            text="도착지"
            isBlock="false"
            item={[
              { title: "서울", link: "" },
              { title: "제주", link: "" },
            ]}
          />
        </div>
        <div className="calendar_container">
          <div className="calendar__text">출발일</div>
          <Calendar />
          <span className="calendar__text">도착일</span>
          <Calendar />
        </div>
        <SearchList />
        <div className="departure">
          <button className="departure__btn">
            <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
            <p>Departure</p>
          </button>
        </div>
      </div>
    </SearchWrap>
  );
}

export default SearchBox;
