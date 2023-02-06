import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";

const API_KEY = "b0be9ca452b56cd351eea81bcafa0f44";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const SearchPage = (props: any) => {
  const [loading, setLoading] = useState(true);
  const mainApi = async () => {};

  useEffect(() => {
    mainApi();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <div id="weather">
        <span></span>
        <span></span>
      </div>
    </>
  );
};

function onGeoOk(position: any) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // city?.innerText = data.name;
      // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

export default SearchPage;
