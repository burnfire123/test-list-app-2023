import { Grid, Typography } from "@mui/material";
import { WeatherInfo } from "../WeatherInfo";

export interface IProps {
	weatherInfo: WeatherInfo
}

export function WeatherComponent({weatherInfo}: IProps) {
	return <Grid container direction="column">
		<Grid item>
			<Typography>
				City: {weatherInfo.city}
			</Typography>
		</Grid>
		<Grid item>
			<Typography>
				{`Temperature (in C): ${weatherInfo.tempCelsius}`}
			</Typography>
		</Grid>
	</Grid>
}