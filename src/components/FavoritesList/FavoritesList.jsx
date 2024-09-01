import { useSelector } from "react-redux";
import { FavoritesListItem } from "../FavoritesListItem/FavoritesListItem";

export const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <section>
      <h3>Favorites</h3>
      {favorites.length > 0 ? (
        favorites.map((favoriteCity) => (
          <FavoritesListItem
            key={favoriteCity.city}
            favoriteCity={favoriteCity}
          />
        ))
      ) : (
        <p>Favorites list is empty.</p>
      )}
    </section>
  );
};
