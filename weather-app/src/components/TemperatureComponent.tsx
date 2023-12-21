import { FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { TemperatureUnit, WeatherInfo } from "../WeatherInfo"

export interface IProps {
	temperature: Pick<WeatherInfo, "tempCelsius" | "tempFahrenheit">;
}

export function TemperatureComponent(props: IProps) {
	const { temperature } = props;
	const [unit, setUnit] = useState<TemperatureUnit>("celsius");
	function handleSwitchToggle(event) {
		const { target: { checked } } = event;
		let unit: TemperatureUnit = "celsius";
		if (checked) {
			unit = "fahrenheit";
		}
		setUnit(unit);
	}
	function getTemperature() {
		if (unit === "celsius") {
			return temperature.tempCelsius;
		}
		return temperature.tempFahrenheit;
	}
	return <Grid container alignItems={"center"} spacing={3}>
		<Grid item>
			<Typography>
				{`Temperature: ${getTemperature()}°${unit.toUpperCase().charAt(0)}`}
			</Typography>
		</Grid>
		<Grid item>
			<FormGroup>
				<FormControlLabel label="Use imperial" control={<Switch  onChange={handleSwitchToggle} />} />
			</FormGroup>
		</Grid>
	</Grid>
}