import { Typography } from "@mui/material"
import { WeatherCondition } from "../WeatherInfo"

export interface IProps {
	condition: WeatherCondition
}

export function WeatherIcon({ condition }: IProps) {
	const weatherToEmoji = {
		[WeatherCondition.CLEAR]: "🌞",
		[WeatherCondition.PARTLY_CLOUDY]: "⛅",
		[WeatherCondition.CLOUDY]: "☁️",
		[WeatherCondition.OVERCAST]: "☁️",
		[WeatherCondition.MIST]: "🌫️",
		[WeatherCondition.LIGHT_RAIN]: "🌧️",
		[WeatherCondition.MODERATE_RAIN]: "🌧️"
	}
	return <Typography variant="h1">
		{ weatherToEmoji[condition] || "❓" }
	</Typography>
}