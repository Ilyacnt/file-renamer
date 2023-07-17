import InputPageName from '../../UI/InputPageName/InputPageName'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import ItemControls from '../../components/ItemControls/ItemControls'
import styles from './FilePage.module.css'
import { useState } from 'react'

const FilePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <>
            <div className={styles.FilePage}>
                <InputPageName />
                <ImageGallery/>
            </div>
            <ItemControls type="files"/>
        </>
    )
}

export default FilePage
