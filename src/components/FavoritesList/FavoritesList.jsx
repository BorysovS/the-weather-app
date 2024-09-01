import { useSelector } from "react-redux";
import { FavoritesListItem } from "../FavoritesListItem/FavoritesListItem";

import styles from "./FavoritesList.module.css";

export const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <section>
      <h2 className={styles.favorites_list_title}>Favorites</h2>
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
