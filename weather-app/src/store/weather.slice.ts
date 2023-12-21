import { createSlice } from "@reduxjs/toolkit";
import { getCurrentWeatherThunk } from "../services/WeatherService/weather.service";

export const weatherSlice = createSlice({
	initialState: {
		current: null,
	},
	name: "weather",
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getCurrentWeatherThunk.fulfilled, (state, action) => {
			state.current = action.payload!;
		});
	},
});
