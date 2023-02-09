import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import SearchView from "../components/SearchView";

const API_KEY =
  "B4w%2BouwgattOuQ%2BoVlzGaVpUoH6qYQmr9GjQ1zou%2Fvr2JR4h5%2BRE%2F%2FxNNeygDB2UUbswLZwhkNXAS%2BRojIqpoA%3D%3D";

const Search = (props: any) => {
  const location = useLocation();
  const state = location.state;
  const [loading, setLoading] = useState(false);

  const departure = state.departure;
  const destination = state.destination;
  const airType = state.airType;
  const startDate = state.startDate.replace(/\//g, "");

  const AIRPORT_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList?ServiceKey=${API_KEY}&pageNo=1`;
  const DOMESTIC_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/FlightScheduleList/getDflightScheduleList?serviceKey=${API_KEY}&schDeptCityCode=${departure}&schArrvCityCode=${destination}&schDate=${startDate}`;
  const INTERNATIONAL_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/IflightScheduleList/getIflightScheduleList?serviceKey=${API_KEY}&schArrvCityCode=GMP&schDeptCityCode=ICN&pageNo=1`;

  const mainApi = async () => {
    await fetch(DOMESTIC_API_URL, {
      headers: {
        "x-cors-api-key": "temp_f725bd4bd754e5de9c60ee709a5ede89",
      },
    })
      .then((response) => response.text())
      .then((str) => new DOMParser().parseFromString(str, "application/xml"))
      .then((xml) => {
        console.log(xml);
        setLoading(false);
      });
  };
  useEffect(() => {
    mainApi();
    // console.log(startDate);
  }, []);

  return <>{loading ? <Loading /> : <>{<SearchView />}</>}</>;
};

export default Search;
