import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import SearchView from "../components/SearchView";

const API_KEY =
  "B4w%2BouwgattOuQ%2BoVlzGaVpUoH6qYQmr9GjQ1zou%2Fvr2JR4h5%2BRE%2F%2FxNNeygDB2UUbswLZwhkNXAS%2BRojIqpoA%3D%3D";

const Search = (props: any) => {
  const location = useLocation();
  const state = location.state;
  const [loading, setLoading] = useState(true);
  const [result, setResult]: any = useState([]);

  /**
   * DepartureBtn 클릭시 받아오는 state
   */
  const departure = state.departure;
  const destination = state.destination;
  const isDomestic = state.airType === "domestic";
  const startDate = state.startDate.replace(/\//g, "");

  const DOMESTIC_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/FlightScheduleList/getDflightScheduleList?serviceKey=${API_KEY}&schDeptCityCode=${departure}&schArrvCityCode=${destination}&schDate=${startDate}`;
  const INTERNATIONAL_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList?serviceKey=${API_KEY}&schDeptCityCode=${departure}&schArrvCityCode=${destination}&schDate=${startDate}`;

  const mainApi = async () => {
    await fetch(isDomestic ? DOMESTIC_API_URL : INTERNATIONAL_API_URL, {
      headers: {
        "x-cors-api-key": "temp_f725bd4bd754e5de9c60ee709a5ede89",
      },
    })
      .then((response) => response.text())
      .then((str) => new DOMParser().parseFromString(str, "application/xml"))
      .then(async (xml) => {
        const items: any = xml.querySelector("items")?.children;
        const itemsArr = [...items];
        await setResult((prev: any) => {
          return [...itemsArr];
        });
        setLoading(false);
        console.log(items);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    mainApi();
  }, []);

  return <>{loading ? <Loading /> : <SearchView searchResult={result} />}</>;
};

export default Search;
