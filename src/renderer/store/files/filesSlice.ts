import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FileItem } from '../../types/file'

export interface FilesState {
    files: FileItem[]
    loading: boolean
    error: string | null
}

const mockData: FileItem[] = [
    {
        id: '1',
        name: 'File1',
        size: '2MB',
        type: { ext: 'png', mime: 'image/png' },
    },
    {
        id: '2',
        name: 'ImageFile',
        size: '1.5MB',
        type: { ext: 'png', mime: 'image/png' },
    },
    {
        id: '3',
        name: 'VideoFile',
        size: '10MB',
        type: { ext: 'png', mime: 'image/png' },
    },
]

const initialState: FilesState = {
    files: mockData,
    loading: false,
    error: null,
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
    },
})

export const { getFilesStart, getFilesSucces, getFilesFailure, addFiles, removeFile } =
    filesSlice.actions
export const filesReducer = filesSlice.reducer
