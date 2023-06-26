import CaretUpIcon from '@/assets/caret-up.svg'
import CaretDownIcon from '@/assets/caret-down.svg'
import styles from './ExpandButton.module.css'
import { useState } from 'react'

const ExpandButton = ({ expanded, defaultIcon = 'down' }: ExpandButtonProps) => {
    const [expandedButton, setExpandedButton] = useState<boolean>(expanded)

    const expandedHandler = () => {
        setExpandedButton((prev) => !prev)
    }

    return (
        <div className={styles.ExpandButton} onClick={expandedHandler}>
            {defaultIcon === 'down' ? (
                expandedButton ? (
                    <CaretDownIcon />
                ) : (
                    <CaretUpIcon />
                )
            ) : expandedButton ? (
                <CaretUpIcon />
            ) : (
                <CaretDownIcon />
            )}
        </div>
    )
}

export default ExpandButton

interface ExpandButtonProps {
    expanded: boolean
    defaultIcon?: 'up' | 'down'
}
