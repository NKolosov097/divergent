import { configureStore } from "@reduxjs/toolkit"
import { articlesSlice } from "./slices/articles"

export const store = configureStore({
    reducer: {
        [articlesSlice.name]: articlesSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
