import useSWR from "swr";
import { nanoid } from "nanoid";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function organizeData(data) {
  const newData = data.map((item) => {
    return {
      id: nanoid(),
      date: new Date(item.Date).toUTCString().substring(0, 11),
      icon: item.Day.Icon,
      phrase: item.Day.IconPhrase,
      max: item.Temperature.Maximum.Value,
      min: item.Temperature.Minimum.Value,
      tempType: item.Temperature.Maximum.Unit,
      wind: { ...item.Day.Wind.Speed, Name: "Wind Status", id: nanoid() },
      cloudCover: {
        id: nanoid(),
        Value: item.Day.CloudCover,
        Unit: "%",
        Name: "Cloud Cover",
      },
      rainProbability: {
        id: nanoid(),
        Value: item.Day.RainProbability,
        Name: "Rain Probability",
        Unit: "%",
      },
      solarIrradiance: {
        ...item.Day.SolarIrradiance,
        Name: "Solar Irradiance",
        id: nanoid(),
      },
    };
  });

  return newData;
}
function useWeatherData(cityId, temperature) {
  // fetch city weather
  const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${
    cityId.key
  }?apikey=${
    import.meta.env.VITE_WEATHER_DATA_KEY
  }&details=true&metric=${temperature}`;
  const { data, error } = useSWR(url, fetcher, { suspense: true });

  // only organize data if data true and error false
  const newData = data && !error && organizeData(data.DailyForecasts);

  return {
    data: newData,
    isError: error,
  };
}

export default useWeatherData;
