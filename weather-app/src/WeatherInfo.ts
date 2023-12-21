export enum WeatherCondition {
	CLEAR
}

export type WeatherInfo = {
	city: string,
	tempCelsius: number,
	tempFahrenheit: number,
	description: string,
	windSpeed: number, // in km/h
	condition: WeatherCondition,
};