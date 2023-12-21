import { Grid, Typography } from "@mui/material";
import { WeatherInfo } from "../WeatherInfo";
import { TemperatureComponent } from "./TemperatureComponent";
import { WeatherIcon } from "./WeatherIcon";

export interface IProps {
	weatherInfo: WeatherInfo,
}

export function WeatherComponent({weatherInfo}: IProps) {
	return <Grid container direction="column" spacing={1}>
		<Grid item>
			<Typography>
				City: {weatherInfo.city}
			</Typography>
		</Grid>
		<Grid item>
			<Typography>
				Last updated: {weatherInfo.lastUpdated}
			</Typography>
		</Grid>
		<Grid item>
			<TemperatureComponent temperature={weatherInfo}/>
		</Grid>
		<Grid item>
			<Typography>
				💨 Wind speed: {weatherInfo.windSpeed} km/h
			</Typography>
		</Grid>
		<Grid item>
			<Typography>
				{weatherInfo.description}
			</Typography>
		</Grid>
		<Grid item>
			<WeatherIcon condition={weatherInfo.condition} />
		</Grid>
	</Grid>
}