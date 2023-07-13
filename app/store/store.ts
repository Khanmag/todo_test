import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoSlice from "@/app/store/todoSlice";

const rootReducer = combineReducers({
    todo: todoSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch