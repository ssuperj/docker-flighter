import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";

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
`;

function SearchDrop(props: any) {
  return (
    <Wrapper isBlock={props.isBlock}>
      <InputGroup>
        <DropdownButton variant="outline-secondary" title={props.text} id="input-group-dropdown-1">
          {props.item.map((value: any, index: string) => (
            <Dropdown.Item key={index}>
              {value.title}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>{" "}
    </Wrapper>
  );
}

export default SearchDrop;
