import styled from "styled-components";

const SearchView = (props: any) => {
  const Wrapper = styled.div``;

  return (
    <Wrapper>
      {props.searchResult.map((item: any, index: number) => (
        <div key={index}>{item.children[0].innerHTML}</div>
      ))}
    </Wrapper>
  );
};
export default SearchView;
