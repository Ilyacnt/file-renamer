import { ReactNode } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

const Button = ({ type, children }: ButtonProps) => {
    return (
        <button
            className={cn(styles.Button, {
                [styles.Primary]: type === 'primary',
                [styles.Secondary]: type === 'secondary',
            })}
        >
            {children}
        </button>
    )
}

export default Button

interface ButtonProps {
    type: 'primary' | 'secondary'
    children: ReactNode | ReactNode[]
}
