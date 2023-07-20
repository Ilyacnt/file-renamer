import Button from '../../UI/Button/Button'
import ExpandButton from '../../UI/ExpandButton/ExpandButton'
import styles from './ItemControls.module.css'
import CaretLeftIcon from '@/assets/caret-left.svg'
import CaretRightIcon from '@/assets/caret-right.svg'
import CircleSaveIcon from '@/assets/circle-save.svg'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCurrentFileId } from '@/store/files/filesSlice'

const ItemControls: React.FC<ItemControlsProps> = ({ type }) => {
    const { files, currentFileId } = useAppSelector((state) => state.files)
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useAppDispatch()
    let index = files.findIndex((file) => file.id === currentFileId)
    let lastIndex = files.length - 1

    const disabledBtns = () => {
        setIsDisabled(true)
        setTimeout(() => {
            setIsDisabled(false)
        }, 400)
    }
    const prevItem = () => {
        if (type === 'files') {
            if (files.length > 0) {
                index += 1
                disabledBtns()
                if (index > lastIndex) {
                    let id = files[0].id
                    dispatch(setCurrentFileId(id))
                } else {
                    let id = files[index].id
                    dispatch(setCurrentFileId(id))
                }
            }
        } else {
        }
    }
    const nextItem = () => {
        if (type === 'files') {
            if (files.length > 0) {
                index -= 1
                disabledBtns()
                if (index < 0) {
                    let id = files[lastIndex].id
                    dispatch(setCurrentFileId(id))
                } else {
                    let id = files[index].id
                    dispatch(setCurrentFileId(id))
                }
            }
        } else {
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
                    <Button type={'secondary'}>
                        <CaretLeftIcon />
                        Prev
                    </Button>
                    <Button type={'primary'}>
                        Save
                        <CircleSaveIcon />
                    </Button>
                    <Button type={'secondary'}>
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
