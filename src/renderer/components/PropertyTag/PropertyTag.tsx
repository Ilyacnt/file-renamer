import { SetStateAction, useState } from 'react'
import styles from './PropertyTag.module.css'

const PropertyTag = ({ name }: ItemProps) => {
    const [tag, setTag] = useState(name)
    const [isChange, setIsChange] = useState(false)
    const inputChange = (event: { target: { value: SetStateAction<string> } }) => {
        setTag(event.target.value)
    }
    return (
        <div className={styles.PropertyTag}>
            {isChange ? (
                <input
                    autoFocus={true}
                    value={tag}
                    onChange={inputChange}
                    onBlur={() => setIsChange(!isChange)}
                    style={{ width: `${tag.length}rem` }}
                />
            ) : (
                <div className={styles.PropertyTitle} onClick={() => setIsChange(!isChange)}>
                    <span>{tag}</span>
                </div>
            )}
        </div>
    )
}

interface ItemProps {
    name: string
}

export default PropertyTag
