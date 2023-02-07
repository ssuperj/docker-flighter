import { useEffect, useState } from "react";
import styled from "styled-components";
import FileRead from "../components/FileRead";
import Loading from "../components/Loading";
import SearchView from "../components/SearchView";

const API_KEY =
  "B4w%2BouwgattOuQ%2BoVlzGaVpUoH6qYQmr9GjQ1zou%2Fvr2JR4h5%2BRE%2F%2FxNNeygDB2UUbswLZwhkNXAS%2BRojIqpoA%3D%3D";
const AIRPORT_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList?ServiceKey=${API_KEY}&pageNo=1`;
const DOMESTIC_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/DflightScheduleList/getDflightScheduleList?ServiceKey=${API_KEY}&pageNo=1`;
const INTERNATIONAL_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/IflightScheduleList/getIflightScheduleList?ServiceKey=${API_KEY}&pageNo=1`;

const Search = (props: any) => {
  const [loading, setLoading] = useState(false);
  const mainApi = async () => {
    await fetch(AIRPORT_API_URL, {
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
    // mainApi();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <SearchView /> */}
          <FileRead />
        </>
      )}
    </>
  );
};

export default Search;
