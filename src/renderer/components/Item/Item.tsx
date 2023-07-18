import styles from './Item.module.css'
import FileIcon from '@/assets/file.svg'
import NamingIcon from '@/assets/naming.svg'
import cn from 'classnames'
import MicroButton from '../../UI/MicroButton/MicroButton'
import CaretRightIcon from '@/assets/caret-right.svg'
import DeleteCrossIcon from '@/assets/delete-cross.svg'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { removeFile } from '@/store/files/filesSlice'
import { removeNaming } from '@/store/namings/namingsSlice'

const Item = ({ id, type, name, description, selected = false }: ItemProps) => {
    const dispatch = useAppDispatch()
    const { currentFile, files} = useAppSelector((state) => state.files)
    const index = files.findIndex((file) => file.id === currentFile)
    const deleteHandler = (id: string) => {
        if (type === 'file') {
            dispatch(removeFile(id))
        } else if (type === 'naming') {
            dispatch(removeNaming(id))
        }
    }
    return (
        <div className={cn(currentFile === id && styles.Selected, styles.Item)}>
            <div className={styles.Heading}>
                {type === 'file' ? <FileIcon /> : <NamingIcon />}
                <p className={styles.Name}>{name}</p>
            </div>
            <div className={styles.Bottom}>
                <p className={styles.Description}>{description}</p>
                <div className={styles.Buttons}>
                    <MicroButton type="ghosty" onClick={() => deleteHandler(id)}>
                        <DeleteCrossIcon />
                    </MicroButton>
                    <MicroButton type="secondary">
                        <CaretRightIcon />
                    </MicroButton>
                </div>
            </div>
        </div>
    )
}

export default Item

interface ItemProps {
    type: 'file' | 'naming'
    id: string
    name: string
    description: string
    selected?: boolean
}
