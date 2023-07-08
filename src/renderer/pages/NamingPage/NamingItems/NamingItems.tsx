import Item from '../../../components/Item/Item'

const mockNamings = [
    { id: '1', name: 'Animals', description: 'Naming for animals' },
    { id: '2', name: 'Kitties', description: 'Naming for kitties' },
]

const NamingItems = () => {
    return (
        <>
            {mockNamings.map((naming) => (
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
