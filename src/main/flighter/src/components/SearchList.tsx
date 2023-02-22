import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function SearchList(props: any) {
  const [seatType, setSeatType] = useState("ECONOMY");

  const changeColorHandler = (event: any, index: number) => {
    const arr = [...event.currentTarget.parentNode.children];
    arr.forEach((el) => {
      el.style.backgroundColor = "white";
    });
    arr[index].style.backgroundColor = "var(--color-r-m)";
    switch (index) {
      case 0:
        props.checkSeatTypeHandler("economy");
        setSeatType("ECONOMY");
        break;
      case 1:
        props.checkSeatTypeHandler("business");
        setSeatType("BUSINESS");
        break;
      case 2:
        props.checkSeatTypeHandler("first");
        setSeatType("FIRST");
    }
  };
  const countUp = (event: any, index: number) => {
    let adult = props.item[0].count["adult"];
    let youth = props.item[1].count["youth"];
    let child = props.item[2].count["child"];
    if (index === 0) {
      props.onChangeTicket([++adult, youth, child]);
    } else if (index === 1) {
      props.onChangeTicket([adult, ++youth, child]);
    } else if (index === 2) {
      props.onChangeTicket([adult, youth, ++child]);
    }
  };
  return (
    <ListGroup horizontal id={props.checkBtn && "seatType"} data-seat={seatType}>
      {props.item.map((value: any, index: number) => (
        <ListGroup.Item
          key={index}
          onClick={props.checkBtn ? (event) => changeColorHandler(event, index) : (event) => countUp(event, index)}
          style={props.checkBtn && index === 0 ? { background: "var(--color-r-m)" } : {}}
        >
          {value.image ? <FontAwesomeIcon icon={value.image}></FontAwesomeIcon> : null}
          {value.content}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SearchList;
