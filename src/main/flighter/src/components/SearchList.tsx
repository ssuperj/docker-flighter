import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListGroup from "react-bootstrap/ListGroup";

function SearchList(props: any) {
  const changeColorHandler = (event: any, index: number) => {
    const arr = [...event.currentTarget.parentNode.children];
    arr.forEach((el) => {
      el.style.backgroundColor = "white";
    });
    arr[index].style.backgroundColor = "var(--color-r-m)";
    switch (index) {
      case 0:
        props.checkSeatTypeHandler("economy");
        break;
      case 1:
        props.checkSeatTypeHandler("business");
        break;
      case 2:
        props.checkSeatTypeHandler("first");
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
    <ListGroup horizontal>
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
