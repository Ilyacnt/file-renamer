import { useLocation } from 'react-router-dom'
import styles from './OverviewItemList.module.css'
import FileItems from '../../pages/FilePage/FileItems/FileItems'
import NamingItems from '../../pages/NamingPage/NamingItems/NamingItems'

const OverviewItemList = () => {
    const location = useLocation()

    return (
        <div className={styles.OverviewItemList}>
            {location.pathname === '/files' ? <FileItems /> : <NamingItems />}
        </div>
    )
}

export default OverviewItemList
