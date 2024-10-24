import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { blogPostApi } from './service/demmyData'

export const store = configureStore({
    reducer: {
        [blogPostApi.reducerPath]: blogPostApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogPostApi.middleware),


})

setupListeners(store.dispatch);