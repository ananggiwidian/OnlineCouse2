// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "" // <-- KOSONGKAN! (sebelumnya "http://localhost:5000/")
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`, // <-- TAMBAHKAN SLASH di depan (sebelumnya "products")
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productsApi;