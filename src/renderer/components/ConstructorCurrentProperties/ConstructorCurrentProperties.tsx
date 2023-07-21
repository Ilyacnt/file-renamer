import { useAppSelector } from '@/store/hooks'
import PropertyTag from '../PropertyTag/PropertyTag'
import styles from './ConstructorCurrentProperties.module.css'

const ConstructorCurrentProperties = () => {
    const { propertyTags } = useAppSelector((state) => state.namings)
    return (
        <>
            <div className={styles.DivideLine}></div>
            <div className={styles.ConstructorTitle}>
                <span>Constructor</span>
            </div>
            <div className={styles.NamingConstructor}>
                {propertyTags.map((tag) => (
                    <PropertyTag name={tag.name} key={tag.id} />
                ))}
            </div>
            <div className={styles.DivideLine}></div>
        </>
    )
}

export default ConstructorCurrentProperties
