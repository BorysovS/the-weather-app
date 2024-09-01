import { useDispatch, useSelector } from "react-redux";
import { selectCurrentWeather, selectFavorites } from "../../redux/selectors";
import { addFavorite } from "../../redux/favoritesSlice";
import styles from "./CurrentWeatherDisplay.module.css";
import sprite from "../../assets/icons.svg";

export const CurrentWeatherDisplay = () => {
  const currentWeather = useSelector(selectCurrentWeather);
  const dispatch = useDispatch();
  const {
    weather_icon,
    humidity,
    sunrise,
    sunset,
    temp,
    weather_description,
    wind_speed,
  } = currentWeather || {};

  const { lat, lon, cityName, country } = useSelector((state) => state.weather);
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((fav) => fav.city === cityName);

  const handleAddToFavorites = () => {
    const favoriteCity = {
      city: cityName,
      lat,
      lon,
    };
    dispatch(addFavorite(favoriteCity));
  };

  const today = new Date();
  const options = { weekday: "long", day: "numeric", month: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <section>
      {cityName && (
        <div className={styles.current_weather_container}>
          <div className={styles.temp_wrapper}>
            <p className={styles.temp_text}>{temp}&deg;C</p>
            <div>
              <h2 className={styles.city_text}>
                {cityName},{country}
              </h2>
              <p>{formattedDate}</p>
            </div>
          </div>
          <img
            src={weather_icon}
            alt="weather icon"
            width="150px"
            className={styles.image_weather_icon}
          />
          <p className={styles.weather_descr_text}>{weather_description}</p>
          <ul className={styles.weather_data_list}>
            <li className={styles.weather_list_item}>
              <svg
                width={30}
                height={30}
                aria-label="icon-humidity"
                className={styles.icon_weather}
              >
                <use href={sprite + "#icon-humidity"}></use>
              </svg>
              <p className={styles.icon_weather_text}>humidity</p>
              <p className={styles.icon_weather_data}>{humidity}%</p>
            </li>
            <li className={styles.weather_list_item}>
              <svg
                width={30}
                height={30}
                aria-label="icon-wind"
                className={styles.icon_weather}
              >
                <use href={sprite + "#icon-wind"}></use>
              </svg>
              <p className={styles.icon_weather_text}>wind</p>
              <p className={styles.icon_weather_data}>{wind_speed} m/s</p>
            </li>
            <li className={styles.weather_list_item}>
              <svg
                width={30}
                height={30}
                aria-label="icon-sunrise"
                className={styles.icon_weather}
              >
                <use href={sprite + "#icon-sunrise"}></use>
              </svg>
              <p className={styles.icon_weather_text}>sunrise</p>
              <p className={styles.icon_weather_data}>{sunrise}</p>
            </li>
            <li className={styles.weather_list_item}>
              <svg
                width={30}
                height={30}
                aria-label="icon-sunset"
                className={styles.icon_weather}
              >
                <use href={sprite + "#icon-sunset"}></use>
              </svg>
              <p className={styles.icon_weather_text}>sunset</p>
              <p className={styles.icon_weather_data}>{sunset}</p>
            </li>
          </ul>
          {!isFavorite && (
            <button
              type="button"
              onClick={handleAddToFavorites}
              className={styles.add_favorites_btn}
            >
              Add to Favorites
            </button>
          )}
        </div>
      )}
    </section>
  );
};
