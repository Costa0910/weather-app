import Button from "./button/Button";
import { Buttons } from "./temperature-style";
import ContextWeather from "../../../contextWeather/ContextWeather";
import { useContext } from "react";
const Temperature = () => {
  const { temperature } = useContext(ContextWeather);
  return (
    <Buttons>
      {/* To determine witch active and apply style */}
      <Button type={"ºC"} isActive={temperature ? true : false} />
      <Button type={"ºF"} isActive={!temperature ? true : false} />
    </Buttons>
  );
};

export default Temperature;
