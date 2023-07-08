import { useAppSelector } from '@/store/hooks'
import Item from '../../../components/Item/Item'
import styles from './NamingItems.module.css'
import Button from '@/UI/Button/Button'
import PlusIcon from '@/assets/plus.svg'

const NamingItems = () => {
    const { namings } = useAppSelector((state) => state.namings)

    return (
        <>
            {namings.map((naming) => (
                <Item
                    id={naming.id}
                    type="naming"
                    key={naming.id}
                    name={naming.name}
                    description={naming.description}
                />
            ))}
            <Button className={styles.PlusIcon} type="ghosty">
                <PlusIcon />
            </Button>
        </>
    )
}

export default NamingItems
