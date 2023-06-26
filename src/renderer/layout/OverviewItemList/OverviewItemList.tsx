import { useLocation } from 'react-router-dom'
import styles from './OverviewItemList.module.css'

const OverviewItemList = () => {
    const location = useLocation()

    return (
        <div className={styles.OverviewItemList}>
            {location.pathname === '/files' ? <div>files</div> : <div>namings</div>}
        </div>
    )
}

export default OverviewItemList
