import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../redux/operations";

import styles from "./SeacrhBar.module.css";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
      setCity("");
    }
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header_section}>
      <div className={styles.container}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>The Weather App</h1>
          <img
            className={styles.sun_img}
            src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
            alt="Sun"
            width="300"
            height="300"
          />
        </div>
        <div className={styles.input_wrapper}>
          <input
            className={styles.header_input}
            type="text"
            value={city}
            onChange={(evt) => setCity(evt.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter city name"
          />
          <button
            className={styles.search_btn}
            onClick={handleSearch}
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
