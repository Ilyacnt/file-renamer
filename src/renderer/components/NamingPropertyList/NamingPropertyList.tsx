import { useAppSelector } from '@/store/hooks'
import Button from '@/UI/Button/Button'
import NamingProperty from '../NamingProperty/NamingProperty'
import PlusIcon from '@/assets/plus.svg'
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
                {propertyTags.map((tag) => (
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
                ))}
            </div>
            <Button className={styles.PlusIcon} type="ghosty">
                <PlusIcon />
            </Button>
        </>
    )
}

interface PropertyProps {
    currentNaming: number
}

export default NamingPropertyList
