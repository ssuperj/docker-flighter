import styled from "styled-components";

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    width: 100px;
    background-color: red;
  }
`;

function SearchBox() {
  return (
    <SearchWrap>
      <div>
        hello
        <div>hello</div>
      </div>
      <div>hello</div>
      <div>hello</div>
    </SearchWrap>
  );
}

export default SearchBox;
