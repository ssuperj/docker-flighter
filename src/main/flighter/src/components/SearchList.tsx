import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function SearchList(props: any) {
  const [bgColor, setBgColor] = useState(true);
  const changeColor = (event: any) => {
    bgColor ? (event.target.style.backgroundColor = "#ff385c99") : (event.target.style.backgroundColor = null);
    setBgColor((prev) => !prev);
  };
  return (
    <ListGroup horizontal>
      {props.item.map((value: any, index: string) => (
        <ListGroup.Item key={index} onClick={(event) => (props.checkBtn ? changeColor(event) : console.log(123))}>
          {value.image ? <FontAwesomeIcon icon={value.image}></FontAwesomeIcon> : null}
          {value.content}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SearchList;
