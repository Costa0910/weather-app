import { ForecastByDayStyle } from "./forecastByDay-style";
import determineIcon from "../../../../determineIcon/determineIcon";

const ForecastByDay = ({ data, day }) => {
  // if today/tomorrow true, otherwise display date
  const date = day ? day : data.date;

  // get icon
  const icon = determineIcon(data.icon);
  return (
    <ForecastByDayStyle>
      <h4>{date}</h4>
      <img src={icon} alt="forecast for Tomorrow" />
      <p>
        {`${data.max}º${data.tempType}`}
        <span>{`${data.min}º${data.tempType}`}</span>
      </p>
    </ForecastByDayStyle>
  );
};

export default ForecastByDay;
