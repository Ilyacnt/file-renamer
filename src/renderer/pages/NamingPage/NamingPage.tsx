import InputPageName from '../../UI/InputPageName/InputPageName'
import ItemControls from '../../components/ItemControls/ItemControls'
import styles from './NamingPage.module.css'
import ConstructorCurrentProperties from '../../components/ConstructorCurrentProperties/ConstructorCurrentProperties'

const NamingPage = () => {
    return (
        <>
            <div className={styles.NamingPage}>
                <InputPageName />
                <div className={styles.NamingConstructor}>
                    <ConstructorCurrentProperties />
                </div>
            </div>
            <ItemControls type="naming" />
        </>
    )
}

export default NamingPage
