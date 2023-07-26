import { useEffect, useRef, useState } from 'react'
import styles from './Select.module.css'
import CaretDownIcon from '@/assets/caret-down.svg'
import CaretUpIcon from '@/assets/caret-up.svg'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTypeOfProperty, setValuesDataOfProperty } from '@/store/namings/namingsSlice'

const Select = ({ id, namingIndex, propertyIndex, currentValue, options, type }: SelectProps) => {
    const [optionVisible, setOptionVisible] = useState<boolean>(false)
    const rootEl = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()

    const setcurrentValue = (id: string, value: string) => {
        setOptionVisible(false)
        if (type === 'type') {
            dispatch(
                setTypeOfProperty({
                    indexNaming: namingIndex,
                    indexType: propertyIndex,
                    currentValue: value,
                })
            )
        } else if (type === 'data') {
            dispatch(
                setValuesDataOfProperty({
                    indexNaming: namingIndex,
                    indexType: propertyIndex,
                    value: value,
                })
            )
        }
    }

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
            <span>{type === 'type' ? 'Type' : 'Values Data'}</span>
            <div className={styles.SelectMenu} ref={rootEl}>
                <div
                    className={styles.SelectBlock}
                    onClick={() => setOptionVisible(!optionVisible)}
                >
                    <div className={styles.SelectTitle}>
                        <span>{currentValue}</span>
                    </div>
                    {optionVisible ? <CaretUpIcon /> : <CaretDownIcon />}
                </div>
                <div className={styles.OptionsBlock}>
                    {optionVisible && (
                        <div className={styles.OptionsList}>
                            {options.map((item) => {
                                return (
                                    <div
                                        className={styles.Option}
                                        key={item.id}
                                        onClick={() => setcurrentValue(id, item.type)}
                                    >
                                        <span>{item.type}</span>
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
    namingIndex: number
    propertyIndex: number
    currentValue: string
    options: options[]
    type: string
}

interface options {
    id: number
    type: string
}

export default Select
