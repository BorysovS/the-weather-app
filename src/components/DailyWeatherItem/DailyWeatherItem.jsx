import styles from "./DailyWeatherItem.module.css";

export const DailyWeatherItem = ({
  date,
  temp,
  weather_description,
  weather_icon,
}) => {
  console.log("weather_description", weather_description);
  return (
    <li className={styles.item_wrapper}>
      <p>{date}</p>
      <p>max {temp.max}&deg;C</p>
      <p>min {temp.min}&deg;C</p>
      <img src={weather_icon} alt="weather icon" />
      <p>{weather_description}</p>
    </li>
  );
};
