import styled from "styled-components";
import TypeIt from "typeit-react";

const TitleWrap = styled.div`
  span {
    margin: 70px 0px;
    font-weight: 700;
    font-size: 35px;
    background: linear-gradient(to right top, var(--color-r-m), lightpink);
    color: transparent;
    -webkit-background-clip: text;
    .ti-cursor {
      color: lightpink;
      font-size: 35px;
      transform: translateX(1px);
    }
    @media screen and (max-width: 430px) {
      font-size: 25px;
      .ti-cursor {
        font-size: 25px;
      }
    }
  }
`;

const MainTitle = (props: any) => {
  return (
    <TitleWrap>
      <TypeIt
        options={{
          speed: 50,
          waitUntilVisible: true,
          deleteSpeed: 40,
          loop: true,
        }}
        getBeforeInit={(instance) => {
          instance.type("You need a rest of your life").pause(750).delete(19).pause(500).type("Flighter!!").pause(500);
          return instance;
        }}
      ></TypeIt>
    </TitleWrap>
  );
};

export default MainTitle;
