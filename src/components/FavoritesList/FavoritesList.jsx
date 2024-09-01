import { useSelector } from "react-redux";
import { FavoritesListItem } from "../FavoritesListItem/FavoritesListItem";
import sprite from "../../assets/icons.svg";

import styles from "./FavoritesList.module.css";

export const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <section>
      <div className={styles.title_wrapper}>
        <h2 className={styles.favorites_list_title}>Favorites</h2>
        <svg
          width={26}
          height={26}
          aria-label="icon-heart"
          className={styles.icon_weather}
        >
          <use href={sprite + "#icon-heart"}></use>
        </svg>
      </div>
      <ul className={styles.favorites_list}>
        {favorites.length > 0 ? (
          favorites.map((favoriteCity) => (
            <FavoritesListItem
              key={favoriteCity.city}
              favoriteCity={favoriteCity}
            />
          ))
        ) : (
          <p className={styles.favorites_list_descr}>
            Favorites list is empty.
          </p>
        )}
      </ul>
    </section>
  );
};
