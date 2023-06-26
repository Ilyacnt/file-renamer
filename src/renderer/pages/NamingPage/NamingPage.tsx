import InputPageName from '../../UI/InputPageName/InputPageName'
import ItemControls from '../../components/ItemControls/ItemControls'
import styles from './NamingPage.module.css'

const NamingPage = () => {
    return (
        <>
            <div className={styles.NamingPage}>
                <InputPageName />
                <div>Naming Constructor Here</div>
            </div>
            <ItemControls type="naming" />
        </>
    )
}

export default NamingPage
