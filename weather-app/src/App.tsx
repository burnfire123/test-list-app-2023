import './App.css'
import { CitySelect } from './components/CitySelect'
import { Paper, Typography, Grid } from '@mui/material'
import { WeatherComponent } from './components/WeatherComponent';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { getCurrentWeatherThunk } from './services/WeatherService/weather.service';

function App() {
  const { current } = useSelector((state: any) => state.weather);
  const dispatch = useDispatch<AppDispatch>();
  return <Grid container spacing={5} marginLeft="3px" marginTop="3px">
      <Paper>
        <Grid item>
          <Typography variant="h3">Weather app</Typography>
        </Grid>
        <Grid item>
          <Paper>
          <CitySelect handleSearch={city => dispatch(getCurrentWeatherThunk(city))} />
          <Grid item>
            {current && <WeatherComponent weatherInfo={current}/>}
          </Grid>
          </Paper>
      </Grid>
      </Paper>
    </Grid>
}

export default App
