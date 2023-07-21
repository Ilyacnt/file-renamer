import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NamingItem, PropertyTags } from '../../types/naming'

interface NamingsState {
    namings: NamingItem[]
    propertyTags: PropertyTags[]
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

const TagsBlank: PropertyTags[] = [
    { id: '0', name: 'OFFER' },
    { id: '1', name: 'BUYER' },
    { id: '2', name: 'DESIGNER COLOR' },
    { id: '3', name: 'CODE' },
    { id: '4', name: 'TYPE' },
    { id: '5', name: 'RES' },
]

const initialState: NamingsState = {
    namings: mockData,
    propertyTags: TagsBlank,
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
