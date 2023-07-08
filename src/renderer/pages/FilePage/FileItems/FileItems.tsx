import Button from '../../../UI/Button/Button'
import Item from '../../../components/Item/Item'
import PlusIcon from '@/assets/plus.svg'
import styles from './FileItems.module.css'

const mockFiles = [
    { id: 1, name: 'Capybara.png', fileSize: '10MB' },
    { id: 2, name: 'Elephant.jpg', fileSize: '5MB' },
    { id: 3, name: 'Giraffe.gif', fileSize: '2MB' },
]

const FileItems = () => {
    return (
        <>
            {mockFiles.map((file) => (
                <Item type="file" key={file.id} name={file.name} description={file.fileSize} />
            ))}
            <Button className={styles.PlusIcon} type="ghosty">
                <PlusIcon />
            </Button>
        </>
    )
}

export default FileItems
