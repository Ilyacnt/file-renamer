import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FileItem } from '../../types/file'

export interface FilesState {
    files: FileItem[]
    loading: boolean
    error: string | null
    currentFileId: string | null
}

const initialState: FilesState = {
    files: [],
    loading: false,
    error: null,
    currentFileId: null,
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
        setCurrentFileId: (state, action: PayloadAction<string>) => {
            state.currentFileId = action.payload
        },
    },
})

export const {
    getFilesStart,
    getFilesSucces,
    getFilesFailure,
    addFiles,
    removeFile,
    setCurrentFileId,
} = filesSlice.actions
export const filesReducer = filesSlice.reducer
