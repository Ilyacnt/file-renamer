import Button from '../../UI/Button/Button'
import ExpandButton from '../../UI/ExpandButton/ExpandButton'
import styles from './ItemControls.module.css'
import CaretLeftIcon from '@/assets/caret-left.svg'
import CaretRightIcon from '@/assets/caret-right.svg'

const ItemControls = () => {
    return (
        <div className={styles.ItemControls}>
            <div className={styles.ControlsButtons}>
                <Button type={'secondary'}>
                    <CaretLeftIcon />
                    Prev
                </Button>
                <Button type={'primary'}>Rename</Button>
                <Button type={'secondary'}>
                    Next
                    <CaretRightIcon />
                </Button>
                <ExpandButton expanded={false} />
            </div>
        </div>
    )
}

export default ItemControls
