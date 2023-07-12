import { IpcMainEvent, IpcMainInvokeEvent, ipcMain } from 'electron'
import { fileSystemOS } from '../filesystem/FileSystemOS'
import { ChannelsIPC } from './channels'
import { FileItem } from '@/types/file'

class IPCMainController {
    constructor() {}

    registerListeners(): void {
        ipcMain.handle(ChannelsIPC.filesReadChannel, this.handleFilesRead)
        ipcMain.handle(ChannelsIPC.dialogOpenChannel, this.handleDialogOpen)
    }

    async handleFilesRead(event: IpcMainInvokeEvent, filePaths: string[]): Promise<FileItem[]> {
        const result = await fileSystemOS.readFiles(filePaths)
        return result
    }

    async handleDialogOpen(event: IpcMainInvokeEvent) {
        const result = await fileSystemOS.openFileDialog()
        return result
    }
}

export const ipcMainController = new IPCMainController()
