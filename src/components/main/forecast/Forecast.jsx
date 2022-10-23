import { useContext } from "react";
import ContextWeather from "../../../contextWeather/ContextWeather";
import { ForecastStyle } from "./forecast-style";
import ForecastByDay from "./forecastByDay/ForecastByDay";

const Forecast = () => {
  const { data } = useContext(ContextWeather);
  const allForecastByDay = data.map((item, index) => {
    if (index === 0) {
      return <ForecastByDay day="Today" data={item} key={item.id} />;
    } else if (index === 1) {
      return <ForecastByDay day="Tomorrow" data={item} key={item.id} />;
    } else {
      return <ForecastByDay data={item} key={item.id} />;
    }
  });
  return <ForecastStyle>{allForecastByDay}</ForecastStyle>;
};

export default Forecast;
