import styles from "./DailyWeatherItem.module.css";
import sprite from "../../assets/icons.svg";

export const DailyWeatherItem = ({
  date,
  temp,
  weather_description,
  weather_icon,
}) => {
  return (
    <li className={styles.item_wrapper}>
      <p className={styles.item_wrapper_data}>{date}</p>
      <div>
        <p className={styles.item_wrapper_temp}>
          max
          <svg
            width={16}
            height={16}
            aria-label="icon-temp"
            className={styles.icon_weather}
          >
            <use href={sprite + "#icon-temp"}></use>
          </svg>
          {temp.max}&deg;C
        </p>
        <p className={styles.item_wrapper_temp}>
          min
          <svg
            width={16}
            height={16}
            aria-label="icon-temp"
            className={styles.icon_weather}
          >
            <use href={sprite + "#icon-temp"}></use>
          </svg>
          {temp.min}&deg;C
        </p>
      </div>

      <img src={weather_icon} alt="weather icon" />
      <p className={styles.weather_item_descr}>{weather_description}</p>
    </li>
  );
};
