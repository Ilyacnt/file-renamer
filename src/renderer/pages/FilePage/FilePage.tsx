import InputPageName from '../../UI/InputPageName/InputPageName'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import ItemControls from '../../components/ItemControls/ItemControls'
import styles from './FilePage.module.css'

const FilePage = () => {
    return (
        <>
            <div className={styles.FilePage}>
                <InputPageName />
                <ImageGallery />
            </div>
            <ItemControls />
        </>
    )
}

export default FilePage
