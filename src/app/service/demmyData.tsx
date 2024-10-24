import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const blogPostApi = createApi({
    reducerPath: "blogPost",

    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),

    // get all post
    endpoints: ((builder) => ({
        getAllPost: builder.query<Post[], void>({
            query: () => "/posts",
        }),
    })),
});

export const { useGetAllPostQuery } = blogPostApi