import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/operations";
import { removeFavorite } from "../../redux/favoritesSlice";

import styles from "./FavoritesListItem.module.css";

export const FavoritesListItem = ({ favoriteCity }) => {
  const [showWeather, setShowWeather] = useState(false);
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather[favoriteCity.city]);

  const handleRemoveFromFavorites = () => {
    dispatch(removeFavorite(favoriteCity.city));
  };

  const handleShowWeather = () => {
    if (!weather) {
      dispatch(fetchWeather(favoriteCity.city));
    }
    setShowWeather(true);
  };

  return (
    <li className={styles.favorites_list_item}>
      <p className={styles.city_name}>{favoriteCity.city}</p>
      <div className={styles.btn_wrapper}>
        <button
          className={styles.favorites_item_btn}
          onClick={handleShowWeather}
          type="button"
        >
          Show Weather
        </button>
        <button
          className={styles.favorites_item_btn}
          onClick={handleRemoveFromFavorites}
          type="button"
        >
          Remove
        </button>
      </div>
    </li>
  );
};
