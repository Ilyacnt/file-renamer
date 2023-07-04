import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { filesReducer } from './files/filesSlice'

const store = configureStore({
    reducer: {
        files: filesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
