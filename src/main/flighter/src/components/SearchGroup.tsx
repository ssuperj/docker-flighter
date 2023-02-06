import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function SearchGroup() {
  return (
    <ListGroup as="ol">
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">성인</div>
        </div>
        <Badge bg="secondary" className="mx-1" pill>
          reset
        </Badge>
        <Badge bg="secondary" pill>
          0
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">청소년</div>
        </div>
        <Badge bg="secondary" className="mx-1" pill>
          reset
        </Badge>{" "}
        <Badge bg="danger" pill>
          0
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">유아</div>
        </div>
        <Badge bg="secondary" className="mx-1" pill>
          reset
        </Badge>{" "}
        <Badge bg="danger" pill>
          0
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SearchGroup;
