import ProductReducer from './slices/ProductSlice.js';
import CartReducer from './slices/CartSlice.js';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		ProductReducer,
		CartReducer,
	},
});
