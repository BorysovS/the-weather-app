export const selectIsError = (state) => state.weather.error;

export const selectIsLoading = (state) => state.weather.isLoading;

export const selectCurrentWeather = (state) => state.weather.currentWeather;

export const selectDailyWeather = (state) => state.weather.dailyWeather;

export const selectCity = (state) => state.weather.cityName;

export const selectCountry = (state) => state.weather.country;

export const selectFavorites = (state) => state.favorites;
