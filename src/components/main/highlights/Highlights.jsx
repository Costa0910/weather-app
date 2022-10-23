import ContextWeather from "../../../contextWeather/ContextWeather";
import HighlightsTypes from "./highlightsTypes/HighlightsTypes";
import { HighlightsStyle, HighlightsTypesStyle } from "./highlights-style";
import { useContext } from "react";

const Highlights = () => {
  const { data } = useContext(ContextWeather);
  // show highlights of first City in Array
  const { wind, cloudCover, rainProbability, solarIrradiance } = data[0];
  const allTopHighlights = [wind, cloudCover, rainProbability, solarIrradiance];

  const highlightsTypes = allTopHighlights.map((item, i) => {
    if (i === 0) {
      return <HighlightsTypes type="wind" data={item} key={item.id} />;
    } else if (i === 1) {
      return <HighlightsTypes type="bar" data={item} key={item.id} />;
    } else {
      return <HighlightsTypes data={item} key={item.id} />;
    }
  });

  return (
    <HighlightsStyle>
      <h2>Today’s Highlights</h2>
      <HighlightsTypesStyle>{highlightsTypes}</HighlightsTypesStyle>
    </HighlightsStyle>
  );
};

export default Highlights;
