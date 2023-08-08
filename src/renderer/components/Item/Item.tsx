import styles from './Item.module.css'
import FileIcon from '@/assets/file.svg'
import NamingIcon from '@/assets/naming.svg'
import cn from 'classnames'
import MicroButton from '../../UI/MicroButton/MicroButton'
import CaretRightIcon from '@/assets/caret-right.svg'
import DeleteCrossIcon from '@/assets/delete-cross.svg'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { removeFile, setCurrentFileId } from '@/store/files/filesSlice'
import { removeNaming, setCurrentNamingId } from '@/store/namings/namingsSlice'

const Item = ({ id, type, name, description, selected = false }: ItemProps) => {
    const dispatch = useAppDispatch()
    const { currentFileId, files } = useAppSelector((state) => state.files)
    const { namings, currentNamingId } = useAppSelector((state) => state.namings)

    const indexFile = files.findIndex((file) => file.id === currentFileId)
    const indexNaming = namings.findIndex((naming) => naming.id === currentNamingId)
    const lastIndexFile = files.length - 1
    const lastIndexNaming = namings.length - 1

    const deleteHandler = (id: string) => {
        if (type === 'file') {
            dispatch(removeFile(id))
            if (files.length > 0 && id === currentFileId) {
                if (indexFile + 1 <= lastIndexFile) {
                    let newId = files[indexFile + 1].id
                    dispatch(setCurrentFileId(newId))
                } else if (indexFile === lastIndexFile) {
                    let newId = files[0].id
                    dispatch(setCurrentFileId(newId))
                }
            }
        } else if (type === 'naming') {
            dispatch(removeNaming(id))
            if (namings.length > 0 && id === currentNamingId) {
                if (indexNaming + 1 <= lastIndexNaming) {
                    let newId = namings[indexNaming + 1].id
                    dispatch(setCurrentNamingId(newId))
                } else if (indexNaming === lastIndexNaming) {
                    let newId = namings[0].id
                    dispatch(setCurrentNamingId(newId))
                }
            }
        }
    }

    return (
        <div
            className={cn(
                (currentFileId === id || currentNamingId === id) && styles.Selected,
                styles.Item
            )}
        >
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
