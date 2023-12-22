import { createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherInfo } from "../../WeatherInfo";
import axios from "axios";

export interface WeatherService {
	getCurrentWeather(city: string): Promise<WeatherInfo>;
}

export class WeatherServiceImpl implements WeatherService {
	async getCurrentWeather(city: string): Promise<WeatherInfo> {
		const statusCodeToErrorMessage: { [key: number]: string } = {
			400: "Provided city isn't valid",
			401: "API key wasn't provided",
			403: "There was an API error",
		}
		if (!city) {
			throw new Error(statusCodeToErrorMessage[400]);
		}
		try {
			const { data: { current: weatherInfo }} = await axios.get(`http://api.weatherapi.com/v1/current.json?q=${city}`, {
				headers: {
					key: import.meta.env.VITE_WEATHER_API_KEY
				}
			});
			return {
						city,
						condition: weatherInfo.condition.code,
						description: weatherInfo.condition.text,
						tempCelsius: weatherInfo.temp_c,
						tempFahrenheit: weatherInfo.temp_f,
						windSpeed: weatherInfo.wind_kph,
						lastUpdated: weatherInfo.last_updated
					};
		}
		catch (err) {
			const { response: { status } } = err as { response: { status: number }};
			throw new Error(statusCodeToErrorMessage[status]);
		}
	}
}

export const weatherService = new WeatherServiceImpl();

export const getCurrentWeatherThunk = createAsyncThunk("weather/get", async (city: string) => {
	return weatherService.getCurrentWeather(city);
});