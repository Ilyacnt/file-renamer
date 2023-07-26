import { useAppSelector } from '@/store/hooks'
import NamingProperty from '../NamingProperty/NamingProperty'
import styles from './NamingPropertyList.module.css'

const NamingPropertyList = ({ currentNaming }: PropertyProps) => {
    const { namings } = useAppSelector((state) => state.namings)
    const propertyTags = namings[currentNaming].constructorProperties
    return (
        <>
            <div className={styles.PropertyTitle}>
                <span>Property</span>
            </div>
            <div className={styles.Property}>
                {propertyTags.map((tag) => {
                    return (
                        <NamingProperty
                            key={tag.id}
                            id={tag.id}
                            name={tag.name}
                            type={tag.type}
                            currentValue={tag.currentValue}
                            valuesData={tag.valuesData}
                            namingIndex={currentNaming}
                            additionalData={tag.additionalData}
                        />
                    )
                })}
            </div>
        </>
    )
}

interface PropertyProps {
    currentNaming: number
}

export default NamingPropertyList
