import InputPageName from '../../UI/InputPageName/InputPageName'
import ItemControls from '../../components/ItemControls/ItemControls'
import styles from './NamingPage.module.css'
import ConstructorCurrentProperties from '../../components/ConstructorCurrentProperties/ConstructorCurrentProperties'
import NamingPropertyList from '@/components/NamingPropertyList/NamingPropertyList'
import { useAppSelector } from '@/store/hooks'

const NamingPage = () => {
    const { namings, currentNamingId } = useAppSelector((state) => state.namings)
    let index = namings.findIndex((naming) => naming.id === currentNamingId)
    return (
        <>
            <div className={styles.NamingPage}>
                <InputPageName />
                <div className={styles.NamingConstructor}>
                    <ConstructorCurrentProperties currentNaming={index} />
                    <NamingPropertyList currentNaming={index} />
                </div>
            </div>
            <ItemControls type="naming" />
        </>
    )
}

export default NamingPage
