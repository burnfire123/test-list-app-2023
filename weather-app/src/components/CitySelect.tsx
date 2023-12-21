import { TextField, Button, Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export interface IProps {
	handleSearch(city: string): void;
}

export function CitySelect({handleSearch}: IProps) {
	const [city, setCity] = useState("");
	return <Grid container spacing={2} alignItems="center">
		<Grid item>
			<TextField label="City" onChange={e => setCity(e.target.value)} />
		</Grid>
		<Grid item>
			<Button variant="contained" endIcon={<SearchIcon/>} onClick={() => handleSearch(city)}>Search</Button>
		</Grid>
	</Grid>
}