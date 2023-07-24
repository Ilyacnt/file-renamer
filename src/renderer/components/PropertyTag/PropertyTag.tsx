import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setNameOfProperty } from '@/store/namings/namingsSlice'
import { SetStateAction, useState } from 'react'
import styles from './PropertyTag.module.css'

const PropertyTag = ({ id, name }: ItemProps) => {
    const { namings, currentNamingId } = useAppSelector((state) => state.namings)
    const dispatch = useAppDispatch()
    const [isChange, setIsChange] = useState(false)

    let indexNaming = namings.findIndex((naming) => naming.id === currentNamingId)

    const inputChange = (event: { target: { value: SetStateAction<string> } }) => {
        let indexType = namings[indexNaming].constructorProperties.findIndex(
            (property) => property.id === id
        )
        dispatch(
            setNameOfProperty({
                indexNaming: indexNaming,
                indexType: indexType,
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
}

export default PropertyTag
