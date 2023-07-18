import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FileItem } from '../../types/file'

export interface FilesState {
    files: FileItem[]
    loading: boolean
    error: string | null
    currentFile: string | null
}

const initialState: FilesState = {
    files: [],
    loading: false,
    error: null,
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
            state.currentFile =
                state.files.length === 1
                    ? String(state.files[0].id)
                    : state.currentFile
        },
        removeFile: (state, action: PayloadAction<string>) => {
            state.files = state.files.filter((item) => item.id !== action.payload)
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
    setCurrentFile,
} = filesSlice.actions
export const filesReducer = filesSlice.reducer
