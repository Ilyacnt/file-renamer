import { useAppDispatch } from '@/store/hooks'
import {
    setAdditionalDataOfProperty,
    setCurrentValueOfProperty,
} from '@/store/namings/namingsSlice'
import { SetStateAction, useState } from 'react'
import styles from './ValuesInput.module.css'

const ValuesInput = ({ value, namingIndex, propertyIndex, type }: ItemProps) => {
    const dispatch = useAppDispatch()
    const [isChange, setIsChange] = useState(false)

    const inputChange = (event: { target: { value: SetStateAction<string> } }) => {
        switch (type) {
            case 'additionalData':
                dispatch(
                    setAdditionalDataOfProperty({
                        indexNaming: namingIndex,
                        indexType: propertyIndex,
                        value: event.target.value,
                    })
                )
            case 'currentValue':
                dispatch(
                    setCurrentValueOfProperty({
                        indexNaming: namingIndex,
                        indexType: propertyIndex,
                        value: event.target.value,
                    })
                )
            default:
                return ''
        }
    }
    return (
        <div className={styles.PropertyTag}>
            <input
                value={value}
                onChange={inputChange}
                onBlur={() => setIsChange(!isChange)}
                //style={{ width: `${name.length}rem` }}
            />
        </div>
    )
}

interface ItemProps {
    value: string
    namingIndex: number
    propertyIndex: number
    type: string
}

export default ValuesInput
