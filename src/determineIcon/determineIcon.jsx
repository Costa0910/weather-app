function determineIcon(num) {
  if (num <= 5) {
    return "../src/images/LightCloud.png";
  } else if (num <= 11) {
    return "../src/images/HeavyCloud.png";
  } else if (num <= 21) {
    return "../src/images/Shower.png";
  } else if (num <= 24) {
    return "../src/images/Snow.png";
  } else if (num <= 29) {
    return "../src/images/Sleet.png";
  } else if (num <= 38) {
    return "../src/images/Clear.png";
  } else {
    return "../src/images/LightRain.png";
  }
}

export default determineIcon;
