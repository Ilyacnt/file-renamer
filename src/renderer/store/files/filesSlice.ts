import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FileItem } from '../../types/file'

export interface FilesState {
    files: FileItem[]
    loading: boolean
    error: string | null
    currentIndex: string
    currentId: string | null
}

const initialState: FilesState = {
    files: [],
    loading: false,
    error: null,
    currentIndex: "0",
    currentId: null
}

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        getFilesStart: (state) => {
            state.loading = true
            state.error = null
        },
        getFilesSucces: (state, action: PayloadAction<FileItem[]>) => {
            state.loading = false
            state.files = [...state.files, ...action.payload]
        },
        getFilesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        addFiles: (state, action: PayloadAction<FileItem[]>) => {
            state.files = [...state.files, ...action.payload]
        },
        removeFile: (state, action: PayloadAction<string>) => {
            state.files = state.files.filter((item) => item.id !== action.payload)
        },
        increaseCurrentIndex: (state) => {
            state.currentIndex = String(Number(state.currentIndex) + 1);
        },
        decreaseCurrentIndex: (state) => {
            state.currentIndex = String(Number(state.currentIndex) - 1);
        },
        setCurrentIndex: (state, action: PayloadAction<string>) => {
            state.currentIndex = action.payload;
        }

    },
})

export const { getFilesStart, getFilesSucces, getFilesFailure, addFiles, removeFile, increaseCurrentIndex,
    decreaseCurrentIndex, setCurrentIndex } =
    filesSlice.actions
export const filesReducer = filesSlice.reducer
