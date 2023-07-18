import Button from '../../UI/Button/Button'
import ExpandButton from '../../UI/ExpandButton/ExpandButton'
import styles from './ItemControls.module.css'
import CaretLeftIcon from '@/assets/caret-left.svg'
import CaretRightIcon from '@/assets/caret-right.svg'
import CircleSaveIcon from '@/assets/circle-save.svg'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
    decreaseCurrentIndex,
    increaseCurrentIndex,
    setCurrentFile,
    setCurrentIndex,
} from '@/store/files/filesSlice'

const ItemControls: React.FC<ItemControlsProps> = ({ type }) => {
    const { files, currentIndex, currentId } = useAppSelector((state) => state.files)
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useAppDispatch()
    let index = files.findIndex((file) => file.id === currentId)
    const [indexFile, setIndexFile] = useState(index)
    let lastIndex = files.length - 1

    const disabledBtns = () => {
        setIsDisabled(true)
        setTimeout(() => {
            setIsDisabled(false)
        }, 400)
    }
    const nextItem = () => {
        if (type === 'files') {
            if (files.length > 0) {
                setIndexFile((prev) => prev + 1)
                disabledBtns()
                //dispatch(increaseCurrentIndex())
                if (indexFile > lastIndex) {
                    let id = files[0].id
                    dispatch(setCurrentFile(id))
                    debugger
                } else {
                    let id = files[indexFile].id
                    dispatch(setCurrentFile(id))
                    debugger
                }
            }
        } else {
        }
    }
    const prevItem = () => {
        if (type === 'files') {
            if (files.length > 0) {
                setIndexFile((prev) => prev - 1)
                disabledBtns()
                //dispatch(decreaseCurrentIndex())
                if (indexFile < 0) {
                    let id = files[lastIndex].id
                    dispatch(setCurrentFile(id))
                    debugger
                } else {
                    let id = files[indexFile].id
                    dispatch(setCurrentFile(id))
                    debugger
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
