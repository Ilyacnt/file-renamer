import styles from './OverviewHeader.module.css'
import ChevronDownIcon from '@/assets/caret-down.svg'
import SettingsIcon from '@/assets/setting.svg'
import { useLocation } from 'react-router-dom'

const OverviewHeader = () => {
    const location = useLocation()

    return (
        <div className={styles.OverviewHeader}>
            <div className={styles.OverviewHeaderSelect}>
                {location.pathname === '/files' ? <p>Recent Files</p> : <p>Recent Namings</p>}
                <ChevronDownIcon />
            </div>
            <SettingsIcon />
        </div>
    )
}

export default OverviewHeader
