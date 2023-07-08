import Button from '../../../UI/Button/Button'
import Item from '../../../components/Item/Item'
import PlusIcon from '@/assets/plus.svg'
import styles from './FileItems.module.css'
import { useAppSelector } from '@/store/hooks'

const FileItems = () => {
    const { files } = useAppSelector((state) => state.files)

    const fileReadHandler = () => {
        window.electronAPI.openDialog().then((response) => {
            console.log(response)
        })
    }

    return (
        <>
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
        </>
    )
}

export default FileItems
