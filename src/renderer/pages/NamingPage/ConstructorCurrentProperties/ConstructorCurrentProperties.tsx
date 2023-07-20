import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import styles from './ConstructorCurrentProperties.module.css'

const ConstructorCurrentProperties = () => {
    const ArrBlank = [
        { id: 0, name: 'OFFER' },
        { id: 1, name: 'BUYER' },
        { id: 2, name: 'DESIGNER COLOR' },
        { id: 3, name: 'CODE' },
        { id: 4, name: 'TYPE' },
        { id: 5, name: 'RES' },
    ]
    return (
        <>
            <div className={styles.DivideLine}></div>
            <div className={styles.ConstructorTitle}>
                <span>Constructor</span>
            </div>
            <div className={styles.NamingConstructor}>
                {ArrBlank.map((tag) => (
                    <PropertyTag name={tag.name} key={tag.id} />
                ))}
            </div>
            <div className={styles.DivideLine}></div>
        </>
    )
}

const PropertyTag = ({ name }: ItemProps) => {
    return (
        <div className={styles.PropertyTag}>
            <span>{name}</span>
        </div>
    )
}

interface ItemProps {
    name: string
}

export default ConstructorCurrentProperties
