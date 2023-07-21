import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NamingItem } from '../../types/naming'

interface NamingsState {
    namings: NamingItem[]
    currentNamingId: string
}

const mockData: NamingItem[] = [
    {
        id: '1',
        description: 'lorem ipsum',
        name: 'Naming 1',
        constructorProperties: [
            { id: '0', name: 'OFFER', type: 'simpleText', currentValue: null },
            { id: '1', name: 'BUYER', type: 'simpleText', currentValue: null },
        ],
    },
    {
        id: '2',
        description: 'dolor sit tmer',
        name: 'Naming 2',
        constructorProperties: [
            { id: '2', name: 'DESIGNER COLOR', type: 'simpleText', currentValue: null },
            { id: '3', name: 'CODE', type: 'simpleText', currentValue: null },
        ],
    },
    {
        id: '3',
        description: 'amet pas et',
        name: 'Naming 3',
        constructorProperties: [
            { id: '4', name: 'TYPE', type: 'simpleText', currentValue: null },
            { id: '5', name: 'RES', type: 'simpleText', currentValue: null },
        ],
    },
]

const initialState: NamingsState = {
    namings: mockData,
    currentNamingId: '2',
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
        setCurrentNamingId: (state, action: PayloadAction<string>) => {
            state.currentNamingId = action.payload
        },
    },
})

export const { addNaming, removeNaming, setCurrentNamingId } = namingsSlice.actions
export const namingsReducer = namingsSlice.reducer
