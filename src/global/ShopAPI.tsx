import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProd } from "../models/Interfaces";
const URL = "https://dummyjson.com";

export const ShopAPI = createApi({
    reducerPath: "ShopAPI",
    tagTypes: ["Shop"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        shop: builder.query<IProd, void>({
            query: () => "/products?limit=194",
            providesTags: ["Shop"]
        })
    })
});


