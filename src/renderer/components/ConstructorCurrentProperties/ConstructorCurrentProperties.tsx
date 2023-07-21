import { useAppSelector } from '@/store/hooks'
import PropertyTag from '../PropertyTag/PropertyTag'
import styles from './ConstructorCurrentProperties.module.css'

const ConstructorCurrentProperties = () => {
    const { namings, currentNamingId } = useAppSelector((state) => state.namings)
    let index = namings.findIndex((naming) => naming.id === currentNamingId)
    const propertyTags = namings[index].constructorProperties
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
