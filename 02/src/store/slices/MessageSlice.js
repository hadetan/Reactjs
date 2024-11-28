import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
	name: 'messageSlice',

	initialState: {
		message: '',
		// number: 0,
	},

	reducers: {
		setMessage: (state, action) => {
			state.message = action.payload;
		},
		// setNumber: (state, action) => {
		//     state.number = action.payload;
		// }
	},
});

export default messageSlice.reducer;

export const { setMessage } = messageSlice.actions;
