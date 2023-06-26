import styles from './Item.module.css'
import FileIcon from '@/assets/file.svg'
import NamingIcon from '@/assets/naming.svg'
import cn from 'classnames'

const Item = ({ type, selected = false }: ItemProps) => {
    return (
        <div className={cn(styles.Item, { [styles.Selected]: selected })}>
            <div className={styles.Heading}>
                {type === 'file' ? <FileIcon /> : <NamingIcon />}
                <p className={styles.Name}>Item Name here</p>
            </div>
            <div className={styles.Bottom}>
                <p className={styles.Description}>Description</p>
                <div className={styles.Buttons}>Btns</div>
            </div>
        </div>
    )
}

export default Item

interface ItemProps {
    type: 'file' | 'naming'
    selected?: boolean
}
