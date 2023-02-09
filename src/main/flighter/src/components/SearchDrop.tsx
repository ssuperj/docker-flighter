import { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";
import CitySearch from "./CitySearch";

const Wrapper = styled.div<{ isBlock: boolean }>`
  width: 40%;
  .btn-outline-secondary {
    color: white;
    background: linear-gradient(170deg, var(--color-r-m), LightPink);
    border: none;
  }
  .form-control:focus {
    border-color: transparent;
    box-shadow: 0 0 0 0.1rem var(--color-l-m);
  }

  .dropdown-menu {
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.25s;
    border: 0.25px solid white;
    background: linear-gradient(50deg, var(--color-r-m), LightPink);
  }

  .dropdown-menu.show {
    visibility: visible;
    opacity: 1;
  }

  .dropdown-item {
    color: white;
  }

  .dropdown-item:hover {
    opacity: 0.75;
    color: var(--color-r-m);
    background-color: white;
    transition: 0.5s;
  }

  .dropdown-item:active {
    opacity: 1;
    transition: 0.25s;
  }

  .dropdown-item:focus {
    color: var(--color-r-m);
    background-color: white;
  }
`;

function SearchDrop(props: any) {
  const [searchData, setSearchData] = useState("");
  const [spread, setSpread] = useState(false);

  const KeyDownHandler = (event: any) => {
    if (event.keyCode === 13) {
      setSearchData(event.target.value);
      setSpread(true);
      event.currentTarget.id === "departure"
        ? document.querySelectorAll(".dropdown-menu")[0]?.classList.add("show")
        : document.querySelectorAll(".dropdown-menu")[1]?.classList.add("show");
    }
  };

  const foldDropList = (event: any) => {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });
    if (event.target.classList.contains("dropdown-item")) {
      const clickText = event.target.text;
      const clickIATA = event.target.dataset.iata;
      const input = event.currentTarget.querySelector("input");
      input.value = clickText;
      input.setAttribute("data-iata", clickIATA);
    }
  };

  return (
    <Wrapper isBlock={props.isBlock}>
      <InputGroup onClick={foldDropList}>
        <DropdownButton
          variant="outline-secondary"
          title={props.text}
          id="input-group-dropdown-1"
          style={{ background: "red" }}
        >
          <CitySearch searchData={searchData} onKeyDown={KeyDownHandler} isSpread={spread} />
        </DropdownButton>
        <Form.Control
          aria-label="Text input with dropdown button"
          onKeyDown={KeyDownHandler}
          id={props.inputId}
          data-iata=""
        />
      </InputGroup>
    </Wrapper>
  );
}

export default SearchDrop;
