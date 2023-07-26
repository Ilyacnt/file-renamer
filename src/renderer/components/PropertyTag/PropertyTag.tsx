import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setNameOfProperty } from '@/store/namings/namingsSlice'
import { SetStateAction, useState } from 'react'
import styles from './PropertyTag.module.css'

const PropertyTag = ({ id, name, namingIndex, propertyIndex }: ItemProps) => {
    const dispatch = useAppDispatch()
    const [isChange, setIsChange] = useState(false)

    const inputChange = (event: { target: { value: SetStateAction<string> } }) => {
        dispatch(
            setNameOfProperty({
                indexNaming: namingIndex,
                indexType: propertyIndex,
                name: event.target.value,
            })
        )
    }
    return (
        <div className={styles.PropertyTag}>
            {isChange ? (
                <input
                    autoFocus={true}
                    value={name}
                    onChange={inputChange}
                    onBlur={() => setIsChange(!isChange)}
                    style={{ width: `${name.length}rem` }}
                />
            ) : (
                <div className={styles.PropertyTitle} onClick={() => setIsChange(!isChange)}>
                    <span>{name}</span>
                </div>
            )}
        </div>
    )
}

interface ItemProps {
    id: string
    name: string
    namingIndex: number
    propertyIndex: number
}

export default PropertyTag
