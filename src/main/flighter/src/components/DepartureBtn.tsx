import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modals from "./Modals";

const DepartureBtn = (props: any) => {
  const [show, setShow] = useState(false);
  const toggleModalHandler = () => setShow(!show);

  // const navigate = useNavigate();

  const clickDepartureBtn = () => {
    const departure: any = document.querySelector("#departure");
    const destination: any = document.querySelector("#destination");
    const startDate: any = document.querySelector("#startDate");
    const endDate: any = document.querySelector("#endDate");
    const domesticBtn: any = document.querySelector("#option1");
    const airType = domesticBtn ? "domestic" : "international";

    (!destination.dataset.iata || !destination.dataset.iata) && setShow(true);
    departure.value !== "" && destination.value !== "" && setShow(false);
    /* departure.value !== "" &&
      destination.value !== "" && */
    /* navigate("/search", {
        state: {
          departure: departure.dataset.iata,
          destination: destination.dataset.iata,
          startDate: startDate.value,
          endDate: endDate.value,
          airType: airType,
        },
      }); */
    console.log(destination.dataset.iata);
  };

  return (
    <>
      <div className="departure" onClick={clickDepartureBtn}>
        <button className="departure__btn">
          <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
          <p>Departure</p>
        </button>
      </div>
      <Modals
        show={show}
        toggleModalHandler={toggleModalHandler}
        title={"Flighter"}
        text={"조회 하시려는 정보가 정확하지 않습니다."}
      />
    </>
  );
};
export default DepartureBtn;
