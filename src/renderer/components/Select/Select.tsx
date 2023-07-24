import { useEffect, useRef, useState } from 'react'
import styles from './Select.module.css'
import CaretDownIcon from '@/assets/caret-down.svg'
import CaretUpIcon from '@/assets/caret-up.svg'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTypeOfProperty } from '@/store/namings/namingsSlice'

const Select = ({ id, type }: SelectProps) => {
    const { namings, currentNamingId } = useAppSelector((state) => state.namings)
    const dispatch = useAppDispatch()

    let indexNaming = namings.findIndex((naming) => naming.id === currentNamingId)
    const setType = (id: string, type: string) => {
        let indexType = namings[indexNaming].constructorProperties.findIndex(
            (property) => property.id === id
        )
        setCurrentOption(type)
        setOptionVisible(false)
        dispatch(setTypeOfProperty({ indexNaming: indexNaming, indexType: indexType, type: type }))
    }

    const TypeBlank = [
        { id: 0, type: 'selectData', name: 'Select Data' },
        { id: 1, type: 'uniqueCode', name: 'Unique Code' },
        { id: 2, type: 'simpleText', name: 'Simple Text' },
        { id: 3, type: 'resolution', name: 'Resolution' },
    ]

    const [currentOption, setCurrentOption] = useState(type)
    const [optionVisible, setOptionVisible] = useState<boolean>(false)
    const rootEl = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClick = (e: any) => {
            if (!rootEl.current) return
            if (!rootEl.current.contains(e.target)) {
                setOptionVisible(false)
            }
        }

        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [optionVisible])

    return (
        <div className={styles.Select}>
            <span>Type</span>
            <div className={styles.SelectMenu} ref={rootEl}>
                <div
                    className={styles.SelectBlock}
                    onClick={() => setOptionVisible(!optionVisible)}
                >
                    <div className={styles.SelectTitle}>
                        <span>{type}</span>
                    </div>
                    {optionVisible ? <CaretUpIcon /> : <CaretDownIcon />}
                </div>
                <div className={styles.OptionsBlock}>
                    {optionVisible && (
                        <div className={styles.OptionsList}>
                            {TypeBlank.map((item) => {
                                return (
                                    <div
                                        className={styles.Option}
                                        key={item.id}
                                        onClick={() => setType(id, item.type)}
                                    >
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

interface SelectProps {
    id: string
    type: string
}

export default Select
