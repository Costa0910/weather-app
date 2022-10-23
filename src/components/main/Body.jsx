import { BodyStyle } from "./body-style";
import Forecast from "./forecast/Forecast";
import Temperature from "./temperature/Temperature";
import Highlights from "./highlights/Highlights";
const Body = () => {
  return (
    <BodyStyle>
      <main>
        <Temperature />
        <Forecast />
        <Highlights />
      </main>
      <footer>
        <p>created by Armando Costa - devChallenge</p>
      </footer>
    </BodyStyle>
  );
};

export default Body;
