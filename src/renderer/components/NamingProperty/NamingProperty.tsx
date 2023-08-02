import PropertyTag from '../PropertyTag/PropertyTag'
import Select from '../Select/Select'
import styles from './NamingProperty.module.css'
import MicroButton from '../../UI/MicroButton/MicroButton'
import CaretRightIcon from '@/assets/caret-right.svg'
import DeleteCrossIcon from '@/assets/delete-cross.svg'
import CaretDownIcon from '@/assets/caret-down.svg'
import CaretUpIcon from '@/assets/caret-up.svg'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setAdditionalDataOfProperty, setValuesDataOfProperty } from '@/store/namings/namingsSlice'
import ValuesInput from '../ValuesData/ValuesInput'

const NamingProperty = ({
    id,
    name,
    type,
    currentValue,
    valuesData,
    namingIndex,
    additionalData,
}: NamingPropertyProps) => {
    const { namings } = useAppSelector((state) => state.namings)
    const [additionsVisible, setAdditionsVisible] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    let NewValuesData = valuesData ? valuesData : ' '
    let NewAdditionalData = additionalData ? additionalData : ' '
    let NewCurrentValue = currentValue ? currentValue : ''

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

    let propertyIndex = namings[namingIndex].constructorProperties.findIndex(
        (property) => property.id === id
    )

    useEffect(() => {
        valuesData && valuesData.length > 0 ? setAdditionsVisible(true) : setAdditionsVisible(false)
    }, [valuesData])

    useEffect(() => {
        if (type !== 'selectData') {
            dispatch(
                setValuesDataOfProperty({
                    indexNaming: namingIndex,
                    indexType: propertyIndex,
                    currentValue: undefined,
                })
            )
            dispatch(
                setAdditionalDataOfProperty({
                    indexNaming: namingIndex,
                    indexType: propertyIndex,
                    value: undefined,
                })
            )
            setAdditionsVisible(false)
        }
    }, [type])

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
                        <PropertyTag
                            id={id}
                            name={name}
                            namingIndex={namingIndex}
                            propertyIndex={propertyIndex}
                        />
                    </div>
                    <div className={styles.PropertyItem}>
                        <Select
                            id={id}
                            currentValue={type}
                            options={TypeBlank}
                            type={'type'}
                            namingIndex={namingIndex}
                            propertyIndex={propertyIndex}
                        />
                    </div>
                    {type === 'selectData' && (
                        <div className={styles.PropertyItem}>
                            <Select
                                id={id}
                                currentValue={NewValuesData}
                                options={ValuesDataBlank}
                                type={'data'}
                                namingIndex={namingIndex}
                                propertyIndex={propertyIndex}
                            />
                        </div>
                    )}
                    {type === 'simpleText' && (
                        <div className={styles.PropertyItem}>
                            <span>Value</span>
                            <ValuesInput
                                value={NewAdditionalData}
                                namingIndex={namingIndex}
                                propertyIndex={propertyIndex}
                                type={'additionalData'}
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
            {additionsVisible && valuesData && (
                <div className={styles.LinkBlock}>
                    <div className={styles.PropertyItem}>
                        <span>{valuesData}</span>
                        <ValuesInput
                            value={NewCurrentValue}
                            namingIndex={namingIndex}
                            propertyIndex={propertyIndex}
                            type={'currentValue'}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

interface NamingPropertyProps {
    id: string
    name: string
    type: string
    currentValue?: string
    valuesData?: string
    namingIndex: number
    additionalData?: string
}

export default NamingProperty
