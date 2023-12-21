import { TextField, Button, Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export function CitySelect() {
	function handleSearch() {
		alert("Search has been pressed!");
	}
	return <Grid container spacing={2} alignItems="center">
		<Grid item>
			<TextField label="City" />
		</Grid>
		<Grid item>
			<Button variant="contained" endIcon={<SearchIcon/>} onClick={handleSearch}>Search</Button>
		</Grid>
	</Grid>
}