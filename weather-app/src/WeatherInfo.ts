export enum WeatherCondition {
	CLEAR = 1000, PARTLY_CLOUDY = 1003, CLOUDY = 1006, OVERCAST = 1009, MIST = 1030,
	LIGHT_RAIN = 1183, MODERATE_RAIN = 1189
}

export type TemperatureUnit = "celsius" | "fahrenheit";

export type WeatherInfo = {
	city: string,
	tempCelsius: number,
	tempFahrenheit: number,
	description: string,
	windSpeed: number, // in km/h
	condition: WeatherCondition,
	lastUpdated: string,
};
