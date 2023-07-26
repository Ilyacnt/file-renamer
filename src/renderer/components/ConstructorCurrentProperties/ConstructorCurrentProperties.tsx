import { useAppSelector } from '@/store/hooks'
import PropertyTag from '../PropertyTag/PropertyTag'
import styles from './ConstructorCurrentProperties.module.css'

const ConstructorCurrentProperties = ({ currentNaming }: ConstructorProps) => {
    const { namings } = useAppSelector((state) => state.namings)
    const propertyTags = namings[currentNaming].constructorProperties
    return (
        <>
            <div className={styles.DivideLine}></div>
            <div className={styles.ConstructorTitle}>
                <span>Constructor</span>
            </div>
            <div className={styles.NamingConstructor}>
                {propertyTags.map((tag) => {
                    let propertyIndex = propertyTags.findIndex((property) => property.id === tag.id)
                    return (
                        <PropertyTag
                            name={tag.name}
                            key={tag.id}
                            id={tag.id}
                            namingIndex={currentNaming}
                            propertyIndex={propertyIndex}
                        />
                    )
                })}
            </div>
            <div className={styles.DivideLine}></div>
        </>
    )
}

interface ConstructorProps {
    currentNaming: number
}

export default ConstructorCurrentProperties
