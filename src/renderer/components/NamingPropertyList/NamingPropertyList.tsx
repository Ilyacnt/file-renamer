import NamingProperty from '../NamingProperty/NamingProperty'
import styles from './NamingPropertyList.module.css'

const NamingPropertyList = () => {
    return (
        <>
            <div className={styles.PropertyTitle}>
                <span>Property</span>
            </div>
            <div className={styles.Property}>
                <NamingProperty />
                <NamingProperty />
            </div>
        </>
    )
}

export default NamingPropertyList
