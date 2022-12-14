import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "RAIN",
    "04n": "RAIN",
    "09d": "RAIN",
    "09n": "RAIN",
    "010d": "RAIN",
    "010n": "RAIN",
    "011d": "THUNDERSTORM",
    "011n": "THUNDERSTORM",
    "013d": "SNOW",
    "013n": "SNOW",
    "050d": "FOG",
    "050n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#C5B358"
      size={props.size}
      animate={true}
    />
  );
}
