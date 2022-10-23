import { useContext } from "react";
import ContextWeather from "./contextWeather/ContextWeather";
import useWeatherData from "./fetchWeather/fetchWeather";
const ErrorBoundary = (props) => {
  // const { data, isError } = useWeatherData();
  // const { setGlobalData } = useContext(ContextWeather);
  // setGlobalData({ data: data, isError });

  // const { globalData } = useContext(ContextWeather);
  if (props.isError) return props.fallback;
  return props.children;
};

export default ErrorBoundary;
