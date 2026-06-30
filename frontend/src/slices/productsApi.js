// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "" // tetap kosong
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/api/products`, // <-- TAMBAHKAN /api/
    }),
  }),
});


export const { useGetAllProductsQuery } = productsApi;