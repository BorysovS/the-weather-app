import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

export const weatherApi = axios.create({
  baseURL: baseUrl,
  params: {
    appid: API_KEY,
  },
});

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { rejectWithValue }) => {
    try {
      const response = await weatherApi.get("/geo/1.0/direct", {
        params: {
          q: city,
          limit: 1,
        },
      });
      const data = response.data;

      if (data.length > 0) {
        const weatherResp = await weatherApi.get("/data/3.0/onecall", {
          params: {
            lat: data[0].lat.toFixed(2),
            lon: data[0].lon.toFixed(2),
            exclude: "minutely, hourly",
            appid: API_KEY,
            units: "metric",
          },
        });
        const weatherData = weatherResp.data;
        return {
          weatherData,
          cityName: data[0].name,
          country: data[0].country,
        };
      }
      toast.error("Incorrect city name");
      return rejectWithValue("Incorrect city name");
    } catch (error) {
      toast.error("Failed to fetch coordinates");
      return rejectWithValue("Failed to fetch coordinates");
    }
  }
);

export const fetchWeatherByCityName = createAsyncThunk(
  "weather/fetchWeatherByCityName",
  async (coords, { rejectWithValue }) => {
    try {
      const response = await weatherApi.get("/data/3.0/onecall", {
        params: {
          lat: coords.lat,
          lon: coords.lon,
          units: metric,
        },
      });
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch coordinates");
    }
  }
);
