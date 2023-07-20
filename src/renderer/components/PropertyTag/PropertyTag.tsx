import styles from './PropertyTag.module.css'

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

export default PropertyTag
