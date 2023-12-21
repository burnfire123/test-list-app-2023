import './App.css'
import { CitySelect } from './components/CitySelect'
import { Box, Paper, Typography, Grid } from '@mui/material'

function App() {
  return <Grid container spacing={5} marginLeft="3px" marginTop="3px">
      <Paper>
        <Grid item>
          <Typography variant="h3">Weather app</Typography>
      </Grid>
      <Grid item>
        <Paper>
          <CitySelect/>
        </Paper>
      </Grid>
      </Paper>
    </Grid>
}

export default App
