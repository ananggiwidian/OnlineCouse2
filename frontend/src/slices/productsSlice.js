import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	items: [],
	status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
};

export const productsFetch = createAsyncThunk("products/productsFetch", async () => {
	try {
		const response = await axios.get("http://localhost:5000/products");
		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
});

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(productsFetch.pending, (state) => {
				state.status = "loading";
			})
			.addCase(productsFetch.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = "succeeded";
			})
			.addCase(productsFetch.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export default productsSlice.reducer;
