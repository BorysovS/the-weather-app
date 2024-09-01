import { useSelector } from "react-redux";
import { selectDailyWeather } from "../../redux/selectors";
import { DailyWeatherItem } from "../DailyWeatherItem/DailyWeatherItem";

import style from "./DailyWeatherList.module.css";

export const DailyWeatherList = () => {
  const dailyWeather = useSelector(selectDailyWeather);

  return (
    <section>
      <h2 className={style.visually_hidden}>Daily Weather</h2>
      <ul>
        {dailyWeather &&
          dailyWeather.slice(1).map((dayWeather, index) => {
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
