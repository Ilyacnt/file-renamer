import Button from '../../UI/Button/Button'
import ExpandButton from '../../UI/ExpandButton/ExpandButton'
import styles from './ItemControls.module.css'
import CaretLeftIcon from '@/assets/caret-left.svg'
import CaretRightIcon from '@/assets/caret-right.svg'
import CircleSaveIcon from '@/assets/circle-save.svg'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { decreaseCurrentIndex, increaseCurrentIndex, setCurrentIndex } from '@/store/files/filesSlice'

const ItemControls: React.FC<ItemControlsProps> = ({ type }) => {
    const { files, currentIndex } = useAppSelector((state) => state.files);
    const [isDisabled, setIsDisabled] = useState(false);
    const dispatch = useAppDispatch();
    const disabledBtns = () => {
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 400)
    }
    useEffect(() => {
        let lastIndex = files.length - 1;
        if (Number(currentIndex) < 0) {
            dispatch(setCurrentIndex(lastIndex));
        }
        if (Number(currentIndex) > lastIndex) {
            dispatch(setCurrentIndex(0));
        }
    }, [currentIndex])
    const nextSlide = () => {
        if (files.length > 0) {
            disabledBtns();
            dispatch(increaseCurrentIndex());
        }
    }
    const prevSlide = () => {
        if (files.length > 0) {
            disabledBtns();
            dispatch(decreaseCurrentIndex());
        }
    }

    return (
        <div className={styles.ItemControls}>
            {type === 'files'
                ?
                (
                    <div className={styles.ControlsButtons}>
                        <Button type={'secondary'} onClick={prevSlide} disabled={isDisabled}>
                            <CaretLeftIcon />
                            Prev
                        </Button>
                        <Button type={'primary'}>Rename</Button>
                        <Button type={'secondary'} onClick={nextSlide} disabled={isDisabled}>
                            Next
                            <CaretRightIcon />
                        </Button>
                        <ExpandButton expanded={false} />
                    </div>
                )
                :
                (
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
