import PropertyTag from '../PropertyTag/PropertyTag'
import Select from '../Select/Select'
import styles from './NamingProperty.module.css'
import MicroButton from '../../UI/MicroButton/MicroButton'
import CaretRightIcon from '@/assets/caret-right.svg'
import DeleteCrossIcon from '@/assets/delete-cross.svg'
import CaretDownIcon from '@/assets/caret-down.svg'
import CaretUpIcon from '@/assets/caret-up.svg'
import { useState } from 'react'

const NamingProperty = ({ id, name, type, currentValue }: NamingPropertyProps) => {
    const [additionsVisible, setAdditionsVisible] = useState<boolean>(false)
    return (
        <div className={styles.PropertyBlock}>
            <div className={styles.MainProperties}>
                <div className={styles.Properties}>
                    <div
                        className={styles.Additions}
                        onClick={() => setAdditionsVisible(!additionsVisible)}
                    >
                        {additionsVisible ? <CaretUpIcon /> : <CaretDownIcon />}
                    </div>
                    <div className={styles.PropertyItem}>
                        <span>Name</span>
                        <PropertyTag id={id} name={name} />
                    </div>
                    <div className={styles.PropertyItem}>
                        <Select id={id} type={type} />
                    </div>
                </div>
                <div className={styles.Buttons}>
                    <MicroButton type="ghosty">
                        <DeleteCrossIcon />
                    </MicroButton>
                    <MicroButton type="secondary">
                        <CaretRightIcon />
                    </MicroButton>
                </div>
            </div>
            {additionsVisible && (
                <div className={styles.LinkBlock}>
                    <span>Google Sheet Link</span>
                </div>
            )}
        </div>
    )
}

interface NamingPropertyProps {
    id: string
    name: string
    type: string
    currentValue: string | null
}

export default NamingProperty
