import { TextField, Button, Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { weatherSlice } from "../store/weather.slice";

export function CitySelect() {
	const dispatch = useDispatch<AppDispatch>();
	const { city } = useSelector(state => state.weather);
	function handleSearch() {
		alert(`You've requested the following city: ${city}`);
	}
	return <Grid container spacing={2} alignItems="center">
		<Grid item>
			<TextField label="City" onChange={e => dispatch(weatherSlice.actions.setCity(e.target.value))} />
		</Grid>
		<Grid item>
			<Button variant="contained" endIcon={<SearchIcon/>} onClick={handleSearch}>Search</Button>
		</Grid>
	</Grid>
}