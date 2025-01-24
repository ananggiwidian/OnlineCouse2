import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import productsReducer, { productsFetch } from "./slices/productsSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import { productsApi } from "./slices/productsApi";

import App from "./App";

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
