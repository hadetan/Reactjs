import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/MessageSlice.js';
import NoteReducer from './slices/NoteSlice.js';

export default configureStore({
	reducer: {
		messageReducer,
		NoteReducer,
	},
});
