import { Navigate, Route, Routes } from 'react-router-dom'
import styles from './Layout.module.css'
import OverviewHeader from './OverviewHeader/OverviewHeader'
import OverviewMenu from './OverviewMenu/OverviewMenu'
import FilePage from '../pages/FilePage/FilePage'
import NamingPage from '../pages/NamingPage/NamingPage'
import OverviewItemList from './OverviewItemList/OverviewItemList'

const Layout = () => {
    return (
        <div className={styles.Layout}>
            <div className={styles.Owerview}>
                <OverviewHeader />
                <div className={styles.DivideLine} />
                <OverviewItemList />
                <div className={styles.DivideLine} />
                <OverviewMenu />
            </div>
            <div className={styles.Workbench}>
                <Routes>
                    <Route path="/files" element={<FilePage />} />
                    <Route path="/namings" element={<NamingPage />} />
                    <Route path="*" element={<Navigate to={'/files'} />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout
