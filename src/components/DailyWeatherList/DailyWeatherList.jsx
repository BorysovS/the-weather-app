import { useSelector } from "react-redux";
import { selectDailyWeather } from "../../redux/selectors";
import { DailyWeatherItem } from "../DailyWeatherItem/DailyWeatherItem";

export const DailyWeatherList = () => {
  const dailyWeather = useSelector(selectDailyWeather);

  console.log("dailyWeather", dailyWeather);
  return (
    <ul>
      {dailyWeather &&
        dailyWeather.map((dayWeather) => {
          return (
            <DailyWeatherItem
              key={Date.now()}
              date={dayWeather.date}
              temp={dayWeather.temp}
              weather_description={dayWeather.weather_description}
              weather_icon={dayWeather.weather_icon}
            />
          );
        })}
    </ul>
  );
};
