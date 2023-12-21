import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
	initialState: {
		city: ""
	},
	name: "weather",
	reducers: {
		setCity: (state, { payload }: { payload: string }) => {
			state.city = payload;
		}
	}
});
