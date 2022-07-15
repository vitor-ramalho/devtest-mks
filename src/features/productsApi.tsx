import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
  id: number,
  name: string,
  brand: string, 
  description: string,
  price: number,
  photo: string,
  products?: any,
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mks-frontend-challenge-api.herokuapp.com/api/v1" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product, void>({
      query: () => "products?page=1&rows=5&sortBy=id&orderBy=DESC"
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;