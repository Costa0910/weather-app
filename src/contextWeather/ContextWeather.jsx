// import WEATHER_DATA_KEY from "../../apiKey";
import useWeatherData from "../fetchWeather/fetchWeather";
import { createContext, useEffect, useState, Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";

const ContextWeather = createContext();

const errorCallback = (error) => {
  console.log("User do not allow location");
  console.log(error);
};

export const WeatherProvider = ({ children }) => {
  useEffect(() => {
    // ask for user geolocation
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  // Global state, and start with lisbon city
  const [cityId, setCityId] = useState({
    key: "274087",
    name: "Lisbon",
  });

  // Global state, and start with ºc
  const [temperature, setTemperature] = useState(true);

  async function successCallback(position) {
    // get and show user weather
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${
      import.meta.env.VITE_WEATHER_DATA_KEY
    }&q=${lat}%2C${lon}&toplevel=true`;
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      const key = data.Key;
      const name = data.LocalizedName;
      setCityId({ key, name });
    }
  }
  // fetch data with swr
  const { data, isError } = useWeatherData(cityId, temperature);

  return (
    <ContextWeather.Provider
      value={{
        temperature,
        setTemperature,
        setCityId,
        data,
        cityId,
      }}
    >
      <Suspense fallback={<h1>Loading</h1>}>
        <ErrorBoundary
          isError={isError}
          fallback={
            <h1>
              Error occur when trying to load data, please refresh the page
            </h1>
          }
        >
          {children}
        </ErrorBoundary>
      </Suspense>
    </ContextWeather.Provider>
  );
};

export default ContextWeather;
