import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlueBg from "../components/utils/BlueBg";
import Loading from "../components/utils/Loading";
import SearchView from "../components/search/SearchView";
import Weathers1 from "../components/utils/WeatherSub";

/**
 * API에서 받아올 페이지가 더 있는지 확인
 */
const pageTest = (itemCount: number, pageNo: number) => {
  const result = itemCount / (pageNo * 10) >= 1;
  return result;
};

const API_KEY =
  "B4w%2BouwgattOuQ%2BoVlzGaVpUoH6qYQmr9GjQ1zou%2Fvr2JR4h5%2BRE%2F%2FxNNeygDB2UUbswLZwhkNXAS%2BRojIqpoA%3D%3D";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [loading, setLoading] = useState(true);
  const [result, setResult]: any = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);

  /**
   * DepartureBtn 클릭시 받아오는 state
   */
  const departure = state.departure;
  const destination = state.destination;
  const isDomestic = state.airType === "domestic";
  const startDate = state.startDate.replace(/\//g, "");

  const DOMESTIC_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/FlightScheduleList/getDflightScheduleList?serviceKey=${API_KEY}&schDeptCityCode=${departure}&schArrvCityCode=${destination}&schDate=${startDate}&pageNo=${pageNo}`;
  const INTERNATIONAL_API_URL = `https://proxy.cors.sh/http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList?serviceKey=${API_KEY}&schDeptCityCode=${departure}&schArrvCityCode=${destination}&schDate=${startDate}&pageNo=${pageNo}`;

  const mainApi = useCallback(async () => {
    await fetch(isDomestic ? DOMESTIC_API_URL : INTERNATIONAL_API_URL, {
      headers: {
        "x-cors-api-key": "temp_f725bd4bd754e5de9c60ee709a5ede89",
      },
    })
      .then((response) => response.text())
      .then((str) => new DOMParser().parseFromString(str, "application/xml"))
      .then(async (xml) => {
        const items: any = xml.querySelector("items")?.children;
        //조회하는 정보가 없으면 다시 메인 페이지로 리다이렉션
        items.length === 0 &&
          navigate("/", {
            state: {
              show: true,
            },
          });
        const flightCount = Number(xml.querySelector("totalCount")?.innerHTML);
        const pageNo = Number(xml.querySelector("pageNo")?.innerHTML);

        pageTest(flightCount, pageNo) && setIsNextPage(true);
        const itemsArr = [...items];
        await setResult((prev: any) => {
          return [...prev, ...itemsArr];
        });
        setLoading(false);
      })
      .catch((error) => {
        //에러날시 메인페이지
        navigate("/", {
          state: {
            show: true,
          },
        });
      });
  }, [DOMESTIC_API_URL, INTERNATIONAL_API_URL, isDomestic, navigate]);

  const clickMoreBtn = (event: any) => {
    setPageNo((prev) => prev + 1);
  };

  useEffect(() => {
    mainApi();
  }, [mainApi]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <BlueBg />
          <Weathers1 />
          <SearchView
            searchResult={result}
            date={state.startDate}
            isDomestic={isDomestic}
            isNextPage={isNextPage}
            mainApi={mainApi}
            clickMoreBtn={clickMoreBtn}
          />
        </>
      )}
    </>
  );
};

export default Search;
