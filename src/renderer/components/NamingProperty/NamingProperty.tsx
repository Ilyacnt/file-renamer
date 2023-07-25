import PropertyTag from '../PropertyTag/PropertyTag'
import Select from '../Select/Select'
import styles from './NamingProperty.module.css'
import MicroButton from '../../UI/MicroButton/MicroButton'
import CaretRightIcon from '@/assets/caret-right.svg'
import DeleteCrossIcon from '@/assets/delete-cross.svg'
import CaretDownIcon from '@/assets/caret-down.svg'
import CaretUpIcon from '@/assets/caret-up.svg'
import { useEffect, useState } from 'react'

const NamingProperty = ({ id, name, type, currentValue, valuesData }: NamingPropertyProps) => {
    let ValuesDataBlank = [
        { id: 0, type: 'googleSheets' },
        { id: 1, type: 'plainText' },
    ]
    let TypeBlank = [
        { id: 0, type: 'selectData' },
        { id: 1, type: 'uniqueCode' },
        { id: 2, type: 'simpleText' },
        { id: 3, type: 'resolution' },
    ]
    const [additionsVisible, setAdditionsVisible] = useState<boolean>(false)

    useEffect(() => {
        if (valuesData) {
            if (valuesData.length > 0) {
                setAdditionsVisible(true)
            } else setAdditionsVisible(false)
        }
    }, [valuesData])
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
                        <Select id={id} currentValue={type} options={TypeBlank} type={'type'} />
                    </div>
                    {type === 'selectData' && (
                        <div className={styles.PropertyItem}>
                            <Select
                                id={id}
                                currentValue={valuesData ? valuesData : '    '}
                                options={ValuesDataBlank}
                                type={'data'}
                            />
                        </div>
                    )}
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
                    <span>{valuesData}</span>
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
    valuesData?: string
}

export default NamingProperty
