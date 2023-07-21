import Button from '../../UI/Button/Button'
import ExpandButton from '../../UI/ExpandButton/ExpandButton'
import styles from './ItemControls.module.css'
import CaretLeftIcon from '@/assets/caret-left.svg'
import CaretRightIcon from '@/assets/caret-right.svg'
import CircleSaveIcon from '@/assets/circle-save.svg'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCurrentFileId } from '@/store/files/filesSlice'
import { setCurrentNamingId } from '@/store/namings/namingsSlice'

const ItemControls: React.FC<ItemControlsProps> = ({ type }) => {
    const { files, currentFileId } = useAppSelector((state) => state.files)
    const { namings, currentNamingId } = useAppSelector((state) => state.namings)
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useAppDispatch()

    let indexFile = files.findIndex((file) => file.id === currentFileId)
    let indexNaming = namings.findIndex((naming) => naming.id === currentNamingId)
    const lastIndexFile = files.length - 1
    const lastIndexNaming = namings.length - 1

    const disabledBtns = () => {
        setIsDisabled(true)
        setTimeout(() => {
            setIsDisabled(false)
        }, 400)
    }
    const prevItem = () => {
        if (type === 'files') {
            if (files.length > 0) {
                indexFile += 1
                disabledBtns()
                if (indexFile > lastIndexFile) {
                    let id = files[0].id
                    dispatch(setCurrentFileId(id))
                } else {
                    let id = files[indexFile].id
                    dispatch(setCurrentFileId(id))
                }
            }
        } else if (type === 'naming') {
            if (namings.length > 0) {
                indexNaming += 1
                disabledBtns()
                if (indexNaming > lastIndexNaming) {
                    let id = namings[0].id
                    dispatch(setCurrentNamingId(id))
                } else {
                    let id = namings[indexNaming].id
                    dispatch(setCurrentNamingId(id))
                }
            }
        }
    }
    const nextItem = () => {
        if (type === 'files') {
            if (files.length > 0) {
                indexFile -= 1
                disabledBtns()
                if (indexFile < 0) {
                    let id = files[lastIndexFile].id
                    dispatch(setCurrentFileId(id))
                } else {
                    let id = files[indexFile].id
                    dispatch(setCurrentFileId(id))
                }
            }
        } else if (type === 'naming') {
            if (namings.length > 0) {
                indexNaming -= 1
                disabledBtns()
                if (indexNaming < 0) {
                    let id = namings[lastIndexNaming].id
                    dispatch(setCurrentNamingId(id))
                } else {
                    let id = namings[indexNaming].id
                    dispatch(setCurrentNamingId(id))
                }
            }
        }
    }

    return (
        <div className={styles.ItemControls}>
            {type === 'files' ? (
                <div className={styles.ControlsButtons}>
                    <Button type={'secondary'} onClick={nextItem} disabled={isDisabled}>
                        <CaretLeftIcon />
                        Prev
                    </Button>
                    <Button type={'primary'}>Rename</Button>
                    <Button type={'secondary'} onClick={prevItem} disabled={isDisabled}>
                        Next
                        <CaretRightIcon />
                    </Button>
                    <ExpandButton expanded={false} />
                </div>
            ) : (
                <div className={styles.ControlsButtons}>
                    <Button type={'secondary'} onClick={nextItem} disabled={isDisabled}>
                        <CaretLeftIcon />
                        Prev
                    </Button>
                    <Button type={'primary'}>
                        Save
                        <CircleSaveIcon />
                    </Button>
                    <Button type={'secondary'} onClick={prevItem} disabled={isDisabled}>
                        Next
                        <CaretRightIcon />
                    </Button>
                </div>
            )}
        </div>
    )
}

export default ItemControls

interface ItemControlsProps {
    type: 'files' | 'naming'
}
