import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

import { CurrentWeatherDisplay } from "../CurrentWeatherDisplay/CurrentWeatherDisplay";
import { DailyWeatherList } from "../DailyWeatherList/DailyWeatherList";
import { FavoritesList } from "../FavoritesList/FavoritesList";
import styles from "./WeatherDisplay.module.css";
import { selectIsLoading } from "../../redux/selectors";

export const WeatherDisplay = () => {
  const isLoading = useSelector(selectIsLoading);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <main>
      <div className={styles.container}>
        {isLoading ? (
          <RingLoader
            color="#bd00ff"
            cssOverride={{}}
            size={80}
            cssOverride={override}
          />
        ) : (
          <>
            <CurrentWeatherDisplay />
            <DailyWeatherList />
          </>
        )}
        <FavoritesList />
      </div>
    </main>
  );
};
