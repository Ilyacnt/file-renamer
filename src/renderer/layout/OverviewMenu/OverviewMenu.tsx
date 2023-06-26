import styles from './OverviewMenu.module.css'
import CopyIcon from '@/assets/copy.svg'

const OverviewMenu = () => {
    return (
        <div className={styles.OverviewMenu}>
            <div className={styles.Item}>
                <CopyIcon />
            </div>
        </div>
    )
}

export default OverviewMenu
