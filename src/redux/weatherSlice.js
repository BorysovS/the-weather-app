import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./operations";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    cityName: null,
    country: null,
    currentWeather: null,
    dailyWeather: null,
    lat: null,
    lon: null,
    isFavorites: false,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        const { weatherData, cityName, country } = action.payload;

        state.cityName = cityName;
        state.country = country;
        state.lat = weatherData.lat;
        state.lon = weatherData.lon;
        state.currentWeather = {
          temp: Math.round(weatherData.current.temp),
          feels_like: weatherData.current.feels_like.toFixed(1),
          humidity: weatherData.current.humidity,
          pressure: weatherData.current.pressure,
          wind_speed: weatherData.current.wind_speed.toFixed(1),
          weather_description: weatherData.current.weather[0].description,
          weather_icon: `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`,
          sunrise: new Date(weatherData.current.sunrise * 1000)
            .toLocaleTimeString()
            .slice(0, 5),
          sunset: new Date(weatherData.current.sunset * 1000)
            .toLocaleTimeString()
            .slice(0, 5),
        };

        state.dailyWeather = weatherData.daily.map((day) => ({
          date: new Date(day.dt * 1000).toLocaleDateString(),
          temp: {
            max: Math.round(day.temp.max),
            min: Math.round(day.temp.min),
          },
          weather_description: day.weather[0].description,
          weather_icon: `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`,
        }));
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
