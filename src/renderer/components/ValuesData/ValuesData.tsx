import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setAdditionalDataOfProperty } from '@/store/namings/namingsSlice'
import { SetStateAction, useState } from 'react'
import styles from './ValuesData.module.css'

const ValuesData = ({ value, namingIndex, propertyIndex }: ItemProps) => {
    const dispatch = useAppDispatch()
    const [isChange, setIsChange] = useState(false)

    const inputChange = (event: { target: { value: SetStateAction<string> } }) => {
        dispatch(
            setAdditionalDataOfProperty({
                indexNaming: namingIndex,
                indexType: propertyIndex,
                value: event.target.value,
            })
        )
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
}

export default ValuesData
