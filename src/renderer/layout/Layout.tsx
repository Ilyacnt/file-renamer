import styles from './Layout.module.css'
import OverviewMenu from './OverviewMenu/OverviewMenu'

const Layout = () => {
    return (
        <div className={styles.Layout}>
            <div className={styles.Owerview}>
                <div className={styles.OverviewHeader}>OverviewHeeader</div>
                <div className={styles.DivideLine} />
                <div className={styles.Items}>Items Here</div>
                <div className={styles.DivideLine} />
                <OverviewMenu />
            </div>
            <div className={styles.Workbench}>Workbench</div>
        </div>
    )
}

export default Layout
