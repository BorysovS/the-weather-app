import { CurrentWeatherDisplay } from "../CurrentWeatherDisplay/CurrentWeatherDisplay";
import { DailyWeatherList } from "../DailyWeatherList/DailyWeatherList";
import { FavoritesList } from "../FavoritesList/FavoritesList";
import styles from "./WeatherDisplay.module.css";

export const WeatherDisplay = () => {
  return (
    <main>
      <div className={styles.container}>
        {/* <div className={styles.display_wrapper}> */}
        <CurrentWeatherDisplay />
        <DailyWeatherList />
        {/* </div> */}
        <FavoritesList />
      </div>
    </main>
  );
};
