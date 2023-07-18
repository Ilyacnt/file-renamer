import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

const Button = ({ type, className, children, onClick, disabled }: ButtonProps) => {
    return (
        <button
            className={cn(styles.Button, className, {
                [styles.Primary]: type === 'primary',
                [styles.Secondary]: type === 'secondary',
                [styles.Ghosty]: type === 'ghosty',
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type: 'primary' | 'secondary' | 'ghosty'
    children: ReactNode | ReactNode[]
    disabled?: boolean
}
