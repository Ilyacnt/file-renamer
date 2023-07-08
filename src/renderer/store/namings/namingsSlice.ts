import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NamingItem } from '../../types/naming'

interface NamingsState {
    namings: NamingItem[]
}

const mockData: NamingItem[] = [
    {
        id: '1',
        description: 'lorem ipsum',
        name: 'Naming 1',
    },
    {
        id: '2',
        description: 'dolor sit tmer',
        name: 'Naming 2',
    },
    {
        id: '3',
        description: 'amet pas et',
        name: 'Naming 3',
    },
]

const initialState: NamingsState = {
    namings: mockData,
}

const namingsSlice = createSlice({
    name: 'namings',
    initialState,
    reducers: {
        addNaming: (state, action: PayloadAction<NamingItem>) => {
            state.namings.push(action.payload)
        },
        removeNaming: (state, action: PayloadAction<string>) => {
            state.namings = state.namings.filter((naming) => naming.id !== action.payload)
        },
    },
})

export const { addNaming, removeNaming } = namingsSlice.actions
export const namingsReducer = namingsSlice.reducer
