import { useSelector } from "react-redux";
import { selectDailyWeather } from "../../redux/selectors";
import { DailyWeatherItem } from "../DailyWeatherItem/DailyWeatherItem";

import style from "./DailyWeatherList.module.css";

export const DailyWeatherList = () => {
  const dailyWeather = useSelector(selectDailyWeather);

  return (
    <section>
      <h2 className={style.visually_hidden}></h2>
      {dailyWeather && (
        <p className={style.daily_weather_text}>5-day weather forecast</p>
      )}
      <ul>
        {dailyWeather &&
          dailyWeather.slice(1, -2).map((dayWeather, index) => {
            return (
              <DailyWeatherItem
                key={index}
                date={dayWeather.date}
                temp={dayWeather.temp}
                weather_description={dayWeather.weather_description}
                weather_icon={dayWeather.weather_icon}
              />
            );
          })}
      </ul>
    </section>
  );
};
