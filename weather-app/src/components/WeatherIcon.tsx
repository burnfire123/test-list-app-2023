import { Typography } from "@mui/material"
import { WeatherCondition } from "../WeatherInfo"

export interface IProps {
	condition: WeatherCondition
}

export function WeatherIcon({ condition }: IProps) {
	const weatherToEmoji = {
		[WeatherCondition.CLEAR]: "🌞"
	}
	return <Typography variant="h1">
		{ weatherToEmoji[condition] || "❓" }
	</Typography>
}