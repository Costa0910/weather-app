import { QueryResponseStyle } from "./queryResponse-style";
import ContextWeather from "../../../../../contextWeather/ContextWeather";
import { useContext } from "react";
import { startTransition } from "react";

const QueryResponse = ({ city, setNewState }) => {
  const { setCityId } = useContext(ContextWeather);

  // show clicked city actual/weather
  function changeCity() {
    //  this state is from Search component, i don´t wanna include this in context
    setNewState(true);

    startTransition(() => {
      setCityId({
        key: city.Key,
        name: city.LocalizedName,
      });
    });
  }
  return (
    <QueryResponseStyle onClick={changeCity}>
      <h3>
        {city.LocalizedName}, {city.Country.LocalizedName}
        <span className="material-symbols-outlined">chevron_right</span>
      </h3>
    </QueryResponseStyle>
  );
};

export default QueryResponse;
