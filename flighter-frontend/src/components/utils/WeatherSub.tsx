import { useEffect, useState } from "react";
import UseGeoLocation from "./UseGeoLocation";
import styled from "styled-components";

const API_KEY = "7f2b589d43b7c88bc7b56e15ac4d433b";
let lat = 0;
let lng = 0;

let today = new Date();
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let day1;
let day2;
let day3;
let day4;
let day5;
if (today.getDay() === 0) {
  day1 = "일";
  day2 = "월";
  day3 = "화";
  day4 = "수";
  day5 = "목";
} else if (today.getDay() === 1) {
  day1 = "월";
  day2 = "화";
  day3 = "수";
  day4 = "목";
  day5 = "금";
} else if (today.getDay() === 2) {
  day1 = "화";
  day2 = "수";
  day3 = "목";
  day4 = "금";
  day5 = "토";
} else if (today.getDay() === 3) {
  day1 = "수";
  day2 = "목";
  day3 = "금";
  day4 = "토";
  day5 = "일";
} else if (today.getDay() === 4) {
  day1 = "목";
  day2 = "금";
  day3 = "토";
  day4 = "일";
  day5 = "월";
} else if (today.getDay() === 5) {
  day1 = "금";
  day2 = "토";
  day3 = "일";
  day4 = "월";
  day5 = "화";
} else if (today.getDay() === 6) {
  day1 = "토";
  day2 = "일";
  day3 = "월";
  day4 = "화";
  day5 = "수";
}

const todayDate = month + "/" + date + `(${day1})`;
const nextDate1 = month + "/" + (date + 1) + `(${day2})`;
const nextDate2 = month + "/" + (date + 2) + `(${day3})`;
const nextDate3 = month + "/" + (date + 3) + `(${day4})`;
const nextDate4 = month + "/" + (date + 4) + `(${day5})`;

const StyleWrap = styled.div`
  .weather_list {
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 1%;
    width: 180px;
    height: 650px;
    border-radius: 20px;
    background: linear-gradient(#0066b2, #89cff0);
    color: white;
    text-align: center;
    top: 20%;

    .loading {
      justify-content: center;
      h2 {
        font-size: 20px;
        justify-content: center;
        line-height: 600px;
      }
    }

    .location {
      margin-top: 20px;
      margin-bottom: 40px;
      font-family: var(--font-bd);
      font-size: 18px;
      text-shadow: 1px 1px 1px gray;

      img {
        width: 30px;
      }
    }

    .weather {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      align-items: center;
      text-shadow: 1px 1px 1px black;

      img {
        width: 64px;
        height: 64px;
      }

      .weather_info {
        width: 50px;
        text-align: right;
        margin-top: 8px;
        margin-right: 5px;
        margin-left: 10px;

        h1:first-child {
          font-family: var(--font-bd);
          font-size: 20px;
          color: gold;
        }
        h1:last-child {
          margin-top: 7px;
          margin-bottom: 7px;
        }
      }
    }
  }
  @media (max-width: 849px) {
    display: none;
  }
`;

function Weathers() {
  const [loading, setLoading] = useState(true);
  const [loc, setLoc] = useState();
  const [todayWeather, setTodayWeather] = useState(Object);
  const [nextDay1, setNextDay1] = useState(Object);
  const [nextDay2, setNextDay2] = useState(Object);
  const [nextDay3, setNextDay3] = useState(Object);
  const [nextDay4, setNextDay4] = useState(Object);
  const location = UseGeoLocation();

  if (location.coordinates) {
    lat = location.coordinates.lat;
    lng = location.coordinates.lng;
  }

  useEffect(() => {
    const element: any = document.querySelector(".weather_list");

    const handleScroll = (event: any) => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY + 200 >= scrollableHeight) {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`; // &lang=kr
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setLoc(json.city.name);
        setTodayWeather(json.list[2]);
        setNextDay1(json.list[10]);
        setNextDay2(json.list[18]);
        setNextDay3(json.list[26]);
        setNextDay4(json.list[34]);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lng]);
  if (loc === "Globe") {
    return (
      <StyleWrap>
        <div className="weather_list">
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        </div>
      </StyleWrap>
    );
  }
  return (
    <StyleWrap>
      <div className="weather_list">
        {loading ? (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        ) : (
          <>
            {
              <h1 className="location">
                <img src={`${process.env.PUBLIC_URL}/images/ic-location.png`} alt="" />
                <br />
                <br />
                {loc}
              </h1>
            }
            <div className="weather">
              <img src={`${process.env.PUBLIC_URL}/images/weather/${todayWeather.weather[0].icon}.png`} alt="" />
              <div className="weather_info">
                {<h1>{Math.round(todayWeather.main.temp)}°C</h1>}
                {<h1>{todayWeather.weather[0].main}</h1>}
                {todayDate}
              </div>
            </div>

            <div className="weather">
              <img src={`${process.env.PUBLIC_URL}/images/weather/${nextDay1.weather[0].icon}.png`} alt="" />
              <div className="weather_info">
                {<h1>{Math.round(nextDay1.main.temp)}°C</h1>}
                {<h1>{nextDay1.weather[0].main}</h1>}
                {nextDate1}
              </div>
            </div>

            <div className="weather">
              <img src={`${process.env.PUBLIC_URL}/images/weather/${nextDay2.weather[0].icon}.png`} alt="" />
              <div className="weather_info">
                {<h1>{Math.round(nextDay2.main.temp)}°C</h1>}
                {<h1>{nextDay2.weather[0].main}</h1>}
                {nextDate2}
              </div>
            </div>

            <div className="weather">
              <img src={`${process.env.PUBLIC_URL}/images/weather/${nextDay3.weather[0].icon}.png`} alt="" />
              <div className="weather_info">
                {<h1>{Math.round(nextDay3.main.temp)}°C</h1>}
                {<h1>{nextDay3.weather[0].main}</h1>}
                {nextDate3}
              </div>
            </div>

            <div className="weather">
              <img src={`${process.env.PUBLIC_URL}/images/weather/${nextDay4.weather[0].icon}.png`} alt="" />
              <div className="weather_info">
                {<h1>{Math.round(nextDay4.main.temp)}°C</h1>}
                {<h1>{nextDay4.weather[0].main}</h1>}
                {nextDate4}
              </div>
            </div>
          </>
        )}
      </div>
    </StyleWrap>
  );
}
export default Weathers;
