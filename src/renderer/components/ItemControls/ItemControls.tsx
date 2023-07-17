import Button from '../../UI/Button/Button'
import ExpandButton from '../../UI/ExpandButton/ExpandButton'
import styles from './ItemControls.module.css'
import CaretLeftIcon from '@/assets/caret-left.svg'
import CaretRightIcon from '@/assets/caret-right.svg'
import CircleSaveIcon from '@/assets/circle-save.svg'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { decreaseCurrentIndex, increaseCurrentIndex, setCurrentIndex } from '@/store/files/filesSlice'

const ItemControls:React.FC<ItemControlsProps> = ({ type }) => {
    const { files, currentIndex } = useAppSelector((state) => state.files);
    const dispatch = useAppDispatch()
    useEffect(() => {
        let lastIndex = files.length - 1;
        if (Number(currentIndex) < 0) {
            dispatch(setCurrentIndex(`${lastIndex}`));
        }
        if (Number(currentIndex) > lastIndex) {
            dispatch(setCurrentIndex("0"));
        }
    }, [currentIndex])
    return (
        <div className={styles.ItemControls}>
            {type === 'files'
                ?
                (
                    <div className={styles.ControlsButtons}>
                        <Button type={'secondary'} onClick={() => dispatch(increaseCurrentIndex())}>
                            <CaretLeftIcon />
                            Prev
                        </Button>
                        <Button type={'primary'}>Rename</Button>
                        <Button type={'secondary'} onClick={() => dispatch(decreaseCurrentIndex())}>
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
