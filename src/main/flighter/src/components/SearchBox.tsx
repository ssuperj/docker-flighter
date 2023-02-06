import styled from "styled-components";
import CheckBox from "./CheckBox";
import SearchDrop from "./SearchDrop";
import SearchList from "./SearchList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft, faPlaneDeparture, faUser, faChild, faBaby } from "@fortawesome/free-solid-svg-icons";
import { textShaking, fadeOut } from "./styles/AnimationStyles";
import Calendar from "./Calendar";
import SearchGroup from "./SearchGroup";
import { Link } from "react-router-dom";

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
    /* height: 420px; */
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
          color: white;
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
        display: flex;
        justify-content: center;
        margin: 10px 0;
        .list-group-item {
          &:hover {
            background-color: #ff385c99;
            color: white;
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
        <div className="SearchItem__container">
          <div className="SearchList__container">
            <SearchList
              item={[
                { content: "성인", image: faUser },
                { content: "청소년", image: faChild },
                { content: "유아", image: faBaby },
              ]}
            />
            <SearchList
              checkBtn={true}
              item={[{ content: "이코노미 클래스" }, { content: "비즈니스 클래스" }, { content: "퍼스트 클래스" }]}
            />
          </div>
          <div className="SearchGroup__container">
            <SearchGroup></SearchGroup>
          </div>
        </div>
        <div className="departure">
          <Link to="/search">
            <button className="departure__btn">
              <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
              <p>Departure</p>
            </button>
          </Link>
        </div>
      </div>
    </SearchWrap>
  );
}

export default SearchBox;
