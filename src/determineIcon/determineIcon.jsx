import lightCloud from "../src/images/LightCloud.png";
import heavyCloud from "../src/images/HeavyCloud.png";
import shower from "../src/images/Shower.png";
import snow from "../src/images/Snow.png";
import sleet from "../src/images/Sleet.png";
import clear from "../src/images/Clear.png";
import lightRain from "../src/images/LightRain.png";

function determineIcon(num) {
  if (num <= 5) {
    return lightCloud;
  } else if (num <= 11) {
    return heavyCloud;
  } else if (num <= 21) {
    return shower;
  } else if (num <= 24) {
    return snow;
  } else if (num <= 29) {
    return sleet;
  } else if (num <= 38) {
    return clear;
  } else {
    return lightRain;
  }
}

export default determineIcon;
