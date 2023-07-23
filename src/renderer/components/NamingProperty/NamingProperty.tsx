import PropertyTag from '../PropertyTag/PropertyTag'
import styles from './NamingProperty.module.css'

const NamingProperty = () => {
    return (
        <div className={styles.PropertyBlock}>
            <div className={styles.Properties}>
                <span>Name</span>
                <PropertyTag name={'TEST'} />
                <div className={styles.PropertyItem}>
                    <span>Type</span>
                    <PropertyTag name={'Select Data'} />
                </div>
                <div className={styles.PropertyItem}>
                    <span>Values Data</span>
                    <select className={styles.ValuesData}>
                        <option>Select Data</option>
                        <option>Simple Text</option>
                        <option>Resolution</option>
                        <option>Unique Code</option>
                    </select>
                </div>
            </div>
            <div className={styles.LinkBlock}>
                <span>Google Sheet Link</span>
                <PropertyTag name={'Select Data'} />
            </div>
            <div className={styles.Property}>{}</div>
        </div>
    )
}

export default NamingProperty
