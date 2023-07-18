import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FileItem } from '../../types/file'

export interface FilesState {
    files: FileItem[]
    loading: boolean
    error: string | null
    currentIndex: number
    currentId: string | null
    currentFile: string | null
}

const initialState: FilesState = {
    files: [],
    loading: false,
    error: null,
    currentIndex: 0,
    currentId: null,
    currentFile: null,
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
            state.currentId =
                state.files.length === 1
                    ? String(state.files[state.currentIndex].id)
                    : state.currentId
        },
        removeFile: (state, action: PayloadAction<string>) => {
            state.files = state.files.filter((item) => item.id !== action.payload)
            state.currentIndex = state.currentIndex - 1
            state.currentFile =
                state.files.length > 0 ? String(state.files[0].id) : state.currentFile
        },
        increaseCurrentIndex: (state) => {
            state.currentIndex = state.currentIndex + 1
            state.currentId =
                state.currentIndex < state.files.length
                    ? String(state.files[state.currentIndex].id)
                    : state.currentId
        },
        decreaseCurrentIndex: (state) => {
            state.currentIndex = state.currentIndex - 1
            state.currentId =
                state.currentIndex >= 0
                    ? String(state.files[state.currentIndex].id)
                    : state.currentId
        },
        setCurrentIndex: (state, action: PayloadAction<number>) => {
            state.currentIndex = action.payload
            state.currentId =
                state.files.length > 0 ? String(state.files[action.payload].id) : state.currentId
        },
        setCurrentFile: (state, action: PayloadAction<string>) => {
            state.currentFile = action.payload
        },
    },
})

export const {
    getFilesStart,
    getFilesSucces,
    getFilesFailure,
    addFiles,
    removeFile,
    increaseCurrentIndex,
    decreaseCurrentIndex,
    setCurrentIndex,
    setCurrentFile,
} = filesSlice.actions
export const filesReducer = filesSlice.reducer
