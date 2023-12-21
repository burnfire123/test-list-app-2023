import { createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherCondition, WeatherInfo } from "../../WeatherInfo";

export interface WeatherService {
	getCurrentWeather(city: string): Promise<WeatherInfo>;
}

export class WeatherServiceImpl implements WeatherService {
	async getCurrentWeather(city: string): Promise<WeatherInfo> {
		if (city !== "Mock") {
			throw new Error("Not found!");
		}
		return {
			city,
			condition: WeatherCondition.CLEAR,
			description: "Clear sky",
			tempCelsius: 20,
			tempFahrenheit: 90,
			windSpeed: 20
		};
	}
}

export const weatherService = new WeatherServiceImpl();

export const getCurrentWeatherThunk = createAsyncThunk("weather/get", async (city: string, thunkAPI) => {
	const result = await weatherService.getCurrentWeather(city);
	return result;
});