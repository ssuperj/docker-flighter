import styled from "styled-components";

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  .search__container {
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin-top: 100px;
    background: #ff385ccc;
    width: 90%;
    min-width: 480px;
    height: 220px;
  }
`;

function SearchBox() {
  return (
    <SearchWrap>
      <div className="search__container">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Default radio
          </label>
        </div>
      </div>
    </SearchWrap>
  );
}

export default SearchBox;
