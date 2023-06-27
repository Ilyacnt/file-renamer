import styles from './Item.module.css'
import FileIcon from '@/assets/file.svg'
import NamingIcon from '@/assets/naming.svg'
import cn from 'classnames'
import MicroButton from '../../UI/MicroButton/MicroButton'
import CaretRightIcon from '@/assets/caret-right.svg'
import DeleteCrossIcon from '@/assets/delete-cross.svg'

const Item = ({ type, selected = false }: ItemProps) => {
    return (
        <div className={cn(styles.Item, { [styles.Selected]: selected })}>
            <div className={styles.Heading}>
                {type === 'file' ? <FileIcon /> : <NamingIcon />}
                <p className={styles.Name}>Item Name here</p>
            </div>
            <div className={styles.Bottom}>
                <p className={styles.Description}>Description</p>
                <div className={styles.Buttons}>
                    <MicroButton type="ghosty">
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
    selected?: boolean
}
