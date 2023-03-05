import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { load } from "./CitySearch";
import Modals from "../utils/Modals";

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  if (lat1 === lat2 && lon1 === lon2) return 0;

  var radLat1 = (Math.PI * lat1) / 180;
  var radLat2 = (Math.PI * lat2) / 180;
  var theta = lon1 - lon2;
  var radTheta = (Math.PI * theta) / 180;
  var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1) dist = 1;

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  if (dist < 100) dist = Math.round(dist / 10) * 10;
  else dist = Math.round(dist / 100) * 100;

  return dist;
}

const DepartureBtn = (props: any) => {
  const location = useLocation();
  const state = location.state;

  const [show, setShow] = useState(false);
  const showModalHandler = () => setShow(!show);

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
    const seatType: any = document.querySelector("#seatType");

    const airType = domesticBtn.checked ? "domestic" : "international";
    const wayType = wayRadioBtn.checked ? "oneWay" : "twoWay";
    // const seatType =

    const now = new Date().getTime();
    const compareTime = new Date(startDate.value).getTime();
    const diffDay = (now - compareTime) / (1000 * 60 * 60 * 24);

    (!destination.dataset.iata ||
      !destination.dataset.iata ||
      (adult.innerText === "0" && adult.innerText === "0" && adult.innerText === "0") ||
      (wayType === "twoWay" && startDate.value >= endDate.value) ||
      diffDay > 1) &&
      setShow(true);

    /**
     * 조회하려는 정보가 정확할시 search 페이지로 넘어감
     */

    let departurePosition: any = "";
    let destinationPosition: any = "";
    let distance: number = 0;
    if (
      destination.dataset.iata.length === 3 &&
      destination.dataset.iata.length === 3 &&
      (adult.innerText !== "0" || youth.innerText !== "0" || child.innerText !== "0") &&
      startDate.value < endDate.value &&
      diffDay <= 1
    ) {
      load(departure.dataset.iata, "airportdetail.csv", 6, 7, 4)
        .then((resp: any) => {
          departurePosition = resp[0];
        })
        .then(() => {
          load(destination.dataset.iata, "airportdetail.csv", 6, 7, 4)
            .then((resp: any) => {
              destinationPosition = resp[0];
              distance = getDistance(
                departurePosition["data1"],
                departurePosition["data2"],
                destinationPosition["data1"],
                destinationPosition["data2"]
              );
            })
            .then(() => {
              navigate("/search", {
                state: {
                  departure: departure.dataset.iata,
                  destination: destination.dataset.iata,
                  distance: distance,
                  startDate: startDate.value,
                  endDate: endDate.value,
                  airType: airType,
                  wayType: wayType,
                  passengers: {
                    adult: adult.innerText,
                    youth: youth.innerText,
                    child: child.innerText,
                  },
                  seatType: seatType.dataset.seat,
                },
              });
            });
        });
    }
  };

  return (
    <>
      <div className="departure">
        <button className="departure__btn" onClick={clickDepartureBtn}>
          <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
          <p>Departure</p>
        </button>
      </div>
      <Modals
        show={show}
        showModalHandler={showModalHandler}
        title={"Flighter"}
        text={"조회 하시려는 정보가 정확하지 않습니다."}
      />
    </>
  );
};
export default DepartureBtn;
