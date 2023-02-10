import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modals from "./Modals";

const DepartureBtn = (props: any) => {
  const location = useLocation();
  const state = location.state;

  const [show, setShow] = useState(false);
  const toggleModalHandler = () => setShow(!show);

  const navigate = useNavigate();

  useEffect(() => {
    if (state !== null) {
      setShow(true);
      navigate("/", {
        state: null,
      });
    }
  }, [navigate, state]);

  const clickDepartureBtn = () => {
    const departure: any = document.querySelector("#departure");
    const destination: any = document.querySelector("#destination");
    const startDate: any = document.querySelector("#startDate");
    const endDate: any = document.querySelector("#endDate");
    const adult: any = document.querySelector("#adult-value");
    const youth: any = document.querySelector("#youth-value");
    const child: any = document.querySelector("#child-value");
    const domesticBtn: any = document.querySelector("#domestic");
    const wayRadioBtn: any = document.querySelector("#oneWay");

    const airType = domesticBtn.checked ? "domestic" : "international";
    const wayType = wayRadioBtn.checked ? "oneWay" : "twoWay";

    (!destination.dataset.iata ||
      !destination.dataset.iata ||
      (adult.innerText === "0" && adult.innerText === "0" && adult.innerText === "0")) &&
      setShow(true);

    /**
     * 오류페이지 & 조회정보 없을시
     */

    /**
     * 조회하려는 정보가 정확할시 search 페이지로 넘어감
     */
    destination.dataset.iata.length === 3 &&
      destination.dataset.iata.length === 3 &&
      (adult.innerText !== "0" || youth.innerText !== "0" || child.innerText !== "0") &&
      navigate("/search", {
        state: {
          departure: departure.dataset.iata,
          destination: destination.dataset.iata,
          startDate: startDate.value,
          endDate: endDate.value,
          airType: airType,
          wayType: wayType,
          passengers: {
            adult: adult.innerText,
            youth: youth.innerText,
            child: child.innerText,
          },
        },
      });
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
