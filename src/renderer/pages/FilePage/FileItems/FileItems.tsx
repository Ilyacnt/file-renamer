import Button from '../../../UI/Button/Button'
import Item from '../../../components/Item/Item'
import PlusIcon from '@/assets/plus.svg'
import styles from './FileItems.module.css'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addFiles } from '@/store/files/filesSlice'

const FileItems = () => {
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

    return (
        <>
            <Button className={styles.PlusIcon} type="ghosty" onClick={fileReadHandler}>
                <PlusIcon />
            </Button>
            <div className={styles.FilesList}>
                {files.map((file) => (
                    <Item
                        type="file"
                        key={file.id}
                        id={file.id}
                        name={file.name}
                        description={file.size}
                    />
                ))}
            </div>
        </>
    )
}

export default FileItems
