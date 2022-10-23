import { ButtonStyle } from "./button-style";
import ContextWeather from "../../../../contextWeather/ContextWeather";
import { useContext } from "react";
import { startTransition } from "react";

const Button = (props) => {
  const { setTemperature } = useContext(ContextWeather);
  function handleClick(e) {
    const type = e.target.textContent;
    startTransition(() => {
      if (type === "ºF") {
        setTemperature(false);
      } else {
        setTemperature(true);
      }
    });
  }

  return (
    <ButtonStyle onClick={handleClick} className={props.isActive && "active"}>
      {props.type}
    </ButtonStyle>
  );
};

export default Button;
