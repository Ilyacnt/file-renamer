import Button from '../../../UI/Button/Button'
import Item from '../../../components/Item/Item'
import PlusIcon from '@/assets/plus.svg'
import styles from './FileItems.module.css'
import FileIcon from "../../../assets/file-blue.svg"
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addFiles } from '@/store/files/filesSlice'
import { useState } from 'react'

const FileItems = () => {
    const [drag, setDrag] = useState<boolean>(false)
    const { files } = useAppSelector((state) => state.files)
    const dispatch = useAppDispatch()

    const fileReadHandler = async () => {
        const filePaths = await window.electronAPI.openDialog()
        if (filePaths) {
            const filesFromOs = await window.electronAPI.readFiles(filePaths)
            console.log(filesFromOs)
            if (filesFromOs) {
                dispatch(addFiles(filesFromOs))
            }
        }
    }

    const dragStartHandler = (e: any) => {
        e.preventDefault();
        setDrag(true)
    }

    const dragLeaveHandler = (e: any) => {
        e.preventDefault();
        setDrag(false)
    }

    const dropHandler = (e: any) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files]
        console.log(files)
        setDrag(false)
    }

    return (
        <>
            {drag ? (
                <div onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => dropHandler(e)}
                className={styles.DropArea}>
                    <FileIcon/>
                    Drop Files Here...</div>
            ) : (
                <div
                className={styles.FilesArea} 
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}>
                    {files.map((file) => (
                        <Item
                            type="file"
                            key={file.id}
                            id={file.id}
                            name={file.name}
                            description={file.size}
                        />
                    ))}
                    <Button className={styles.PlusIcon} type="ghosty" onClick={fileReadHandler}>
                        <PlusIcon />
                    </Button>
                </div>
            )}
        </>
    )
}

export default FileItems
