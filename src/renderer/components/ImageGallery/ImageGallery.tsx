import { useAppSelector } from '@/store/hooks';
import styles from './ImageGallery.module.css'
import cn from "classnames"

const ImageGallery = () => {
    const { files, currentIndex } = useAppSelector((state) => state.files)
    return <div className={styles.ImageGallery}>
        <div className={styles.GalleryContent}>
            {files.map((item, itemIndex) => {
                let position = 'nextSlide';
                if (itemIndex === currentIndex - 1 || currentIndex === 0 && itemIndex === files.length - 1) position = 'leftSlide';
                if (itemIndex === currentIndex+ 1 || currentIndex === files.length - 1 && itemIndex === 0) position = "rightSlide";
                if (currentIndex === itemIndex || files.length === 1) position = "activeSlide";
                return (
                    <div
                        key={item.id}
                        className={cn(styles.defaultSlide, styles[position])}
                    >
                        <img src={item.pathToFile} />
                    </div>
                );
            })}
        </div>
    </div >
}

export default ImageGallery
