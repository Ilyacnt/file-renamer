import styles from './MicroButton.module.css'
import { ReactNode } from 'react'
import cn from 'classnames'

const MicroButton = ({ type, children }: MicroButtonProps) => {
    return (
        <div
            className={cn(styles.MicroButton, {
                [styles.Secondary]: type === 'secondary',
                [styles.Ghosty]: type === 'ghosty',
            })}
        >
            {children}
        </div>
    )
}

export default MicroButton

interface MicroButtonProps {
    type: 'secondary' | 'ghosty'
    children: ReactNode
}
