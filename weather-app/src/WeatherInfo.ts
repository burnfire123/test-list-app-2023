export enum WeatherCondition {
	CLEAR
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
