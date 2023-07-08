import styles from './MicroButton.module.css'
import { MouseEventHandler, ReactNode } from 'react'
import cn from 'classnames'

const MicroButton = ({ type, children, onClick }: MicroButtonProps) => {
    return (
        <div
            className={cn(styles.MicroButton, {
                [styles.Secondary]: type === 'secondary',
                [styles.Ghosty]: type === 'ghosty',
            })}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default MicroButton

interface MicroButtonProps {
    type: 'secondary' | 'ghosty'
    children: ReactNode
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}
