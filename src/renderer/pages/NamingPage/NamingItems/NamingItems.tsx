import { useAppSelector } from '@/store/hooks'
import Item from '../../../components/Item/Item'

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
        </>
    )
}

export default NamingItems
