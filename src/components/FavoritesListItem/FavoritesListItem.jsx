import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/operations";
import { removeFavorite } from "../../redux/favoritesSlice";

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
    <li>
      <p>{favoriteCity.city}</p>
      <button onClick={handleShowWeather}>Show Current Weather</button>
      {/* {showWeather && weather && (
        <>
          <p>Temperature: {weather.temp}</p>
          <p>Weather description: {weather.weather_description}</p>
        </>
      )} */}
      <button onClick={handleRemoveFromFavorites}>Remove</button>
    </li>
  );
};
