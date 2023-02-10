const API_KEY = "b0be9ca452b56cd351eea81bcafa0f44";

const Weather = (props: any) => {
  return <></>;
};
export default Weather;

async function onGeoOk(position: any) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {});
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
