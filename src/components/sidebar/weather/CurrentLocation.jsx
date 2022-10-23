import ContextWeather from "../../../contextWeather/ContextWeather";
import { useContext } from "react";
import determineIcon from "../../../determineIcon/determineIcon";
import {
  CurrentStyle,
  SearchAndMap,
  CurrentCity,
} from "./currentLocation-style";

const CurrentLocation = ({ setNewState }) => {
  const { data, cityId } = useContext(ContextWeather);

  // get the first CITY
  const today = data[0];

  // get icon
  const todayIcon = determineIcon(today.icon);
  return (
    <CurrentStyle>
      <SearchAndMap>
        <div className="search" onClick={() => setNewState(false)}>
          Search for places
        </div>
        <span className="material-symbols-outlined my-location">
          my_location
        </span>
      </SearchAndMap>
      <CurrentCity>
        <img src={todayIcon} alt="image shower" />
        <h1>
          {today.max}
          <span>{`º${today.tempType}`}</span>
        </h1>
        <p>{today.phrase}</p>
        <div className="dateAndCity">
          <p>
            Today <span>.</span>
            {today.date}
          </p>
          <p className="city">
            <span className="material-symbols-outlined">location_on</span>{" "}
            {cityId.name}
          </p>
        </div>
      </CurrentCity>
    </CurrentStyle>
  );
};

export default CurrentLocation;
