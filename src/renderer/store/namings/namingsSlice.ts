import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NamingItem } from '../../types/naming'

interface NamingsState {
    namings: NamingItem[]
}

const initialState: NamingsState = {
    namings: [],
}

const namingsSlice = createSlice({
    name: 'namings',
    initialState,
    reducers: {
        addNaming: (state, action: PayloadAction<NamingItem>) => {
            state.namings.push(action.payload)
        },
        removeNaming: (state, action: PayloadAction<NamingItem>) => {
            state.namings = state.namings.filter((naming) => naming.id !== action.payload.id)
        },
    },
})

export const { addNaming, removeNaming } = namingsSlice.actions
export const namingsReducer = namingsSlice.reducer
