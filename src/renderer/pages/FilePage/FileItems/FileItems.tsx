import Button from '../../../UI/Button/Button'
import Item from '../../../components/Item/Item'
import PlusIcon from '@/assets/plus.svg'
import styles from './FileItems.module.css'
import { useAppSelector } from '@/store/hooks'

const FileItems = () => {
    const { files } = useAppSelector((state) => state.files)

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
            <Button className={styles.PlusIcon} type="ghosty">
                <PlusIcon />
            </Button>
        </>
    )
}

export default FileItems
