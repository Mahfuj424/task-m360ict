import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit = 10, skip = 0 }) =>
        `products?limit=${limit}&skip=${skip}`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    getCategories: builder.query({
      query: () => `products/categories`,
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `products/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useUpdateProductMutation,
} = productsApi;
